import { User } from "./User.js";
import { Post } from "./Post.js";


export let logInUser;
export let userList = [];


export function loadUserListFromStorage(){
    const storedUserList = JSON.parse(localStorage.getItem("userList"));
   
    if(storedUserList){
        userList = [];

        userList = storedUserList.map(userData => {
            const user = new User(userData.userDetails);
            user.userPosts = (userData.userPosts || []).map(postData => new Post(postData));
            return user;
        });

        console.log('loadUserListFromStorage ', storedUserList)
    }
}

export function saveUserListToStorage(){
    const userDataList = userList.map(user => ({
        userDetails: user.getUserDetails(),
        userPosts: (user.userPosts || []).map(post => ({
            postId: post.getPostId(),
            datePosted: post.getDatePosted(),
            title: post.getTitle(),
            content: post.getContent(),
            votes: post.getVotes(),
        }))
    }));

    console.log('saveUserListToStorage ', userDataList)
    localStorage.setItem("userList", JSON.stringify(userDataList));
}


function createUser(userDetails){
    const user = new User(userDetails);
    userList.push(user);
    console.log('new user initialized')
    saveUserListToStorage();
    loadUserListFromStorage();
}

// load the userList before using
loadUserListFromStorage();
const storedUser = JSON.parse(localStorage.getItem('userList'));

if(!storedUser){
    createUser({
        username: 'leibee',
        fName: 'Lelibee',
        lName: 'Swift',
        description: 'Cybersecurity Consultant in Globe Inc.',
        backgroundImg: 'https://wallpapers.com/images/featured/4k-background-fd313fxzl511betu.jpg',
        profileImg: 'https://wallpapers.com/images/high/cool-profile-picture-faceless-man-qpa6end6whksmm7i.webp'
    });
    
    createUser({
        username: 'minaa',
        fName: 'Mina',
        lName: 'Rmos',
        description: 'Data Scientist in Globe Inc.',
        backgroundImg: 'https://wallpapers.com/images/featured/4k-background-fd313fxzl511betu.jpg',
        profileImg: 'https://wallpapers.com/images/high/cool-profile-picture-faceless-man-qpa6end6whksmm7i.webp'
    });
}



function loginAccount(username) {
    logInUser = userList.find(user => user.getUsername() === username);
    if (!logInUser) {
        console.error(`User with username "${username}" not found!`);
    }
}



loginAccount('leibee');
console.log('logInUser initialized:', logInUser)