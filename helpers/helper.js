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
    deleteIcon: (postUser, loggedUser, postId) => {
        const postUserProfile = postUser.profileImg;
        const postUsername = postUser.username;

        if(postUser._id.equals(loggedUser._id)){
            return `<div class="flex-section">
                        <div class="user-info">
                            <div class="post-user-icon" style='background-image: url("${postUserProfile}")'></div>
                            <p>@${postUsername}</p>
                        </div>
                        
                        <div>
                            <a href="/post/delete/${postId}">
                                <button class="btnDel">Delete Post</button>
                            </a>
                        </div>
                    </div>`
        }

        return `<div class="post-user-icon" style='background-image: url("${postUserProfile}")'></div>
                <p>@${postUsername}</p>`

    },
    editPostIcon: (postUserId, loggedUser, postId) => {
        if(postUserId.equals(loggedUser._id)){
            return `
                <a class="post-control-button edit-button" href="/post/edit/${postId}">
                    <img class="post-icon edit-icon button-svg" src="/svg/pen-new-square-svgrepo-com.svg"></img>
                    <p>edit</p>
                </a>`
        }
    },
    editProfileIcon: (profileUser, loggedUser) => {
        if(profileUser._id.equals(loggedUser._id)){
            return `
                <a href="/user/edit-profile/${loggedUser.username}">
                    <button class="btnEdit">Edit Profile</button>
                </a>
            `
        }
    }
}
