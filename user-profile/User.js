import { Post } from "./Post.js";
import { userList, saveUserListToStorage } from "./create-user.js";

export class User{

    // private
    #userDetails;
    userPosts;


    constructor(userDetails){
        this.#userDetails = userDetails;
        this.userPosts = [];
    }

    loadFromStorage(){
        // Load user details from localStorage
        const storedUserDetails = JSON.parse(localStorage.getItem(this.getUsername()));
        
        // If user data exists, load it
        if (storedUserDetails) {
            this.#userDetails = storedUserDetails.userDetails || this.#userDetails;
            
            // Clear the existing posts array, preventing if to save duplicate data 
            this.userPosts = [];

            // Reconstruct Post instances from stored data
            if(storedUserDetails.userPosts){
                storedUserDetails.userPosts.forEach(postData => {
                    const post = new Post(postData); // Create a new Post instance
                    this.userPosts.push(post); // Add it to the userPosts array
                })
            }

            console.log('loadFromStorage ', storedUserDetails)
        }
    }

    saveToStorage(){
        // Prepare data for storage (convert Post instances to plain objects)
        const userData = {
            userDetails: this.#userDetails,
            userPosts: (this.userPosts || []).map((post) => ({
                postId: post.getPostId(),
                datePosted: post.getDatePosted(),
                title: post.getTitle(),
                content: post.getContent(),
                votes: post.getVotes()
            }))
        };

        console.log('saveToStorage ', userData)
        localStorage.setItem(this.getUsername(), JSON.stringify(userData));
    }

    // Updates a user field
    updateField(field, value) {
        if (field in this.#userDetails) {
            this.#userDetails[field] = value;
        }
    }

    // Synchronize changes back to the global user list
    synchronize() {
        const index = userList.findIndex(user => user.getUsername() === this.getUsername());
        console.log(index)
        if (index !== -1) {
            userList[index] = this; // Update the corresponding user in the list
            const us = userList[index];
            console.log(`userlist[${index}]`, us);
        }
        saveUserListToStorage(); // Save the entire list
    }

    createPost(postDetails){
        const post = new Post(postDetails);
        this.userPosts.push(post);
    }

    getUsername(){
        return this.#userDetails.username;
    }

    getFname(){
        return this.#userDetails.fName;
    }

    getLname(){
        return this.#userDetails.lName;
    }

    getDescription(){
        return this.#userDetails.description;
    }

    getBackgroundImg(){
        return this.#userDetails.backgroundImg;
    }

    getProfileImg(){
        return this.#userDetails.profileImg;
    }

    getUserPosts(){
        return this.userPosts;
    }

    getUserDetails(){
        return this.#userDetails;
    }
}
