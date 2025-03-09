function displayPosts() {
    document.getElementById('post-list').style.display = 'block';
    document.getElementById('comment-list').style.display = 'none';
    document.getElementById('posts-view-button').style.color = 'var(--fg-main)';
    document.getElementById('comments-view-button').style.color = 'var(--fg-tertiary)';

}

function displayComments() {
    document.getElementById('post-list').style.display = 'none';
    document.getElementById('comment-list').style.display = 'block';
    document.getElementById('posts-view-button').style.color = 'var(--fg-tertiary)';
    document.getElementById('comments-view-button').style.color = 'var(--fg-main)';
}