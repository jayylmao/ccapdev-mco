export class Post {
    #postDetails;

    constructor(postDetails, username) {
        this.#postDetails = {
            postCreator: username,
            title: postDetails.title,
            tags: postDetails.tags,
            content: postDetails.content,
            datePosted: postDetails.datePosted,
            votes: postDetails.votes,
            postId: postDetails.id
        };
    }

    updateTitle(title) {
        this.#postDetails.title = title;
    }

    /* TODO: add methods to add and remove tags. */

    updateContent(content) {
        this.#postDetails.content = content;
    }

    updateDatePosted(datePosted) {
        this.#postDetails.datePosted = datePosted;
    }

    updateVotes(votes) {
        this.#postDetails.votes = votes;
    }

    getPostId() {
        return this.#postDetails.postId;
    }

    getDatePosted() {
        return this.#postDetails.datePosted;
    }

    getPostCreator() {
        return this.#postDetails.postCreator;
    }

    getTitle() {
        return this.#postDetails.title;
    }

    getTags() {
        return this.#postDetails.tags;
    }

    getContent() {
        return this.#postDetails.content;
    }

    getVotes() {
        return this.#postDetails.votes;
    }
}