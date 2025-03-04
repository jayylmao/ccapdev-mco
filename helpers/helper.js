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
    deleteIcon: (storyUserId, loggedUser, storyId) => {
        const loggedUserProfile = loggedUser.profileImg;
        const loggedUsername = loggedUser.username;

        if(storyUserId.equals(loggedUser._id)){
            return `<div class="flex-section">
                        <div class="user-info">
                            <div class="post-user-icon" style='background-image: url("${loggedUserProfile}")'></div>
                            <a class="post-user" href="../post/post1.html">
                                <p>@${loggedUsername}</p>
                            </a>
                        </div>
                        
                        <div>
                            <a href="/post/delete">
                                <button class="btnDel">Delete Post</button>
                            </a>
                        </div>
                    </div>`
        }

        return `<div class="post-user-icon" style='background-image: url("${loggedUserProfile}")'></div>
                <a class="post-user" href="../post/post1.html">
                    <p>@${loggedUsername}</p>
                </a>`
    }
}
