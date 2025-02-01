import { Post } from "./post.js";

export class User {
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
            this.#userDetails = storedUserDetails.userDetails;
            
            storedUserDetails.userPosts ? storedUserDetails.userPosts.forEach((postData, index) => {
                const post = this.userPosts[index]; // Access the existing Post instance
                if (post) {
                    // Update the Post instance's properties with the new data
                    post.updateTitle(postData.title);
                    post.updateContent(postData.content); 
                    post.updateDatePosted(postData.datePosted);
                    post.updateVotes(postData.votes); 
                }
            }) : this.userPosts = [];
        }
    }

    saveToStorage(){
        // Prepare data for storage (convert Post instances to plain objects)
        const userData = {
            userDetails: this.#userDetails,
            userPosts: this.userPosts.map((post) => ({
                postId: post.getPostId(),
                datePosted: post.getDatePosted(),
                title: post.getTitle(),
                content: post.getContent(),
                votes: post.getVotes()
            }))
        };

        localStorage.setItem(this.getUsername(), JSON.stringify(userData));
    }

    createPost(postDetails){
        const post = new Post(postDetails, this.getUsername(), this.getProfileImg());
        this.userPosts.push(post);
    }

    // Updates a user field
    updateField(field, value) {
        if (field in this.#userDetails) 
            this.#userDetails[field] = value;
    }

    updateUsername(username){
        this.#userDetails.username = username;
    }

    updateFirstName(fName){
        this.#userDetails.fName = fName;
    }

    updateLastName(lName){
        this.#userDetails.lName = lName;
    }

    updateDescription(description){
        this.#userDetails.description = description;
    }

    updateProfileImg(profileImg){
        this.#userDetails.profileImg = profileImg;
    }

    updateBackgroundImg(backgroundImg){
        this.#userDetails.backgroundImg = backgroundImg;
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

const userDetails = {
    username: 'leibee',
    fName: 'Lelibee',
    lName: 'Swift',
    description: 'Cybersecurity Consultant in Globe Inc.',
    backgroundImg: 'https://wallpapers.com/images/featured/4k-background-fd313fxzl511betu.jpg',
    profileImg: 'https://wallpapers.com/images/high/cool-profile-picture-faceless-man-qpa6end6whksmm7i.webp'
}
export let logInUser = new User(userDetails);