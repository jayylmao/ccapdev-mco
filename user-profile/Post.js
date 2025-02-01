export class Post{

    static #postId = 0;
    #postDetails;

    constructor(postDetails){
        this.#postDetails = {
            title: postDetails.title,
            content: postDetails.content,
            datePosted: postDetails.datePosted,
            votes: postDetails.votes,
            postId: ++Post.#postId
        }
    }

    updateTitle(title){
        this.#postDetails.title = title;
    }

    updateContent(content){
        this.#postDetails.content = content;
    }

    updateDatePosted(datePosted){
        this.#postDetails.datePosted = datePosted;
    }

    updateVotes(votes){
        this.#postDetails.votes = votes;
    }

    getPostId(){
        return this.#postDetails.postId;
    }

    getDatePosted(){
        return this.#postDetails.datePosted;
    }

    getTitle(){
        return this.#postDetails.title;
    }

    getContent(){
        return this.#postDetails.content;
    }

    getVotes(){
        return this.#postDetails.votes;
    }
}

