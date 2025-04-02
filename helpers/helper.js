const User = require('../models/user-model.js');
const moment = require('moment');

module.exports = {
    formatDate: (date, format) => {
        return moment(date).format(format);
    },
    truncate: (str, len) => {
        if (!str) return '';                            
        if (str.length > len) {
            let new_str = str.slice(0, len);            
            let lastSpace = new_str.lastIndexOf(' ');   
            if (lastSpace > 0) {
                new_str = new_str.slice(0, lastSpace);  
            }
            return new_str + '...';  
        }
        return str;
    },
    stripTags: (input) => {
        if (!input) return '';              
        return input
            .replace(/<\/?[^>]+(>|$)/g, '') 
            .replace(/&nbsp;/g, ' ')        
            .trim();                        
    },
    deleteIcon: (postUser, loggedUser, postId, type) => {
        const postUserProfile = postUser.profileImg;
        const postUsername = postUser.username;

        if(loggedUser != null && postUser._id.equals(loggedUser._id)){
            return `<div class="flex-section">
                        <div class="user-info">
                            <div class="post-user-icon" style='background-image: url("${postUserProfile}")'></div>
                            <p>@${postUsername}</p>
                        </div>
                        
                        <div>
                            <a href="/${type}/delete/${postId}">
                                <button class="btnDel">Delete</button>
                            </a>
                        </div>
                    </div>`
        }

        return `<div class="post-user-icon" style='background-image: url("${postUserProfile}")'></div>
                <p>@${postUsername}</p>`

    },
    deleteCommentIcon: (commentUser, loggedUser, commentId) => {
        if(loggedUser != null && commentUser._id.equals(loggedUser._id)){
            return `
                    <form action="/comment/flag/${commentId}" method="POST">
                        <button type="submit" class="btnDel">Delete</button>
                    </form>`
        }
    },
    editIcon: (postUser, loggedUser, postId, type) => {
        if(loggedUser != null && postUser._id.equals(loggedUser._id)){
        return `
                <a class="post-control-button edit-button" href="/${type}/edit/${postId}">
                    <img class="post-icon edit-icon button-svg" src="/svg/edit.svg"></img>
                    <p>Edit</p>
                </a>`
        }
    },
    editProfileIcon: (profileUser, loggedUser) => {
        if(loggedUser != null && profileUser._id.equals(loggedUser._id)){
            return `
                <a href="/edit-profile">
                    <button class="btnEdit">Edit Profile</button>
                </a>
            `
        }
    }
}
