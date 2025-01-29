/**
 * Post contains the details of a post.
 */
class Post {
    constructor(id, title, tags, user, description, votes, date) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.user = user;
        this.description = description;
        this.votes = votes;
        this.date = date;
    }

    upvote() {
        this.votes++;
    }

    downvote() {
        this.votes--;
    }
}