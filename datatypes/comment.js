/**
 * Comment contains the details of a comment.
 */
export class Comment {
    #commentDetails;

    constructor(commentDetails) {
        this.#commentDetails = {
            id: commentDetails.id,
            user: commentDetails.user,
            comment: commentDetails.comment,
            date: commentDetails.date,
            votes: commentDetails.votes,
        };
    }

    upvote() {
        this.#commentDetails.votes++;
    }

    downvote() {
        this.#commentDetails.votes--;
    }

    getID() {
        return this.#commentDetails.id;
    }

    getUser() {
        return this.#commentDetails.user;
    }

    getComment() {
        return this.#commentDetails.comment;
    }

    getDate() {
        return this.#commentDetails.date;
    }

    getVotes() {
        return this.#commentDetails.votes;
    }

    setComment() {
        this.#commentDetails.comment = comment;
    }
}