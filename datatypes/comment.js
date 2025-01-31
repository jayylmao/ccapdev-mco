/**
 * Comment contains the details of a comment.
 */
export class Comment {
    constructor(id, user, comment, date) {
        this.id = id;
        this.user = user;
        this.comment = comment;
        this.date = date;
    }

    upvote() {
        this.votes++;
    }

    downvote() {
        this.votes--;
    }
}