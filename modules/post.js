class Post{

    #postDetails;

    constructor(postDetails) {
        this.#postDetails = postDetails;
    }

    getID() {
        return this.#postDetails.id;
    }

    getUsername() {
        return this.#postDetails.username;
    }

    getDatePosted() {
        return this.#postDetails.datePosted;
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

export const posts = [
{
    id: 6,
    tags: ["food", "q&a"],
    username: 'leibee',
    datePosted: 'January 17, 2018',
    title: 'What is your favorite food?',
    content: `Everyone has that one food they can't resist—something that brings comfort, joy, or even nostalgia. For some, it's the gooey cheese and crispy crust of a perfectly baked pizza. For others, it might be the sweetness of a fresh apple or the spice of a hot curry. 
              Favorite foods are more than just sustenance; they're often tied to memories. A steaming bowl of ramen might remind you of a cozy rainy day, while a slice of birthday cake could bring back celebrations with loved ones. 
              Choosing a favorite food can also reflect your personality. Are you adventurous with sushi or pad Thai, or do you lean toward classics like burgers and fries? Maybe you're a fan of desserts, with chocolate taking the crown.
              Whatever it is, your favorite food tells a little story about you. So, what’s yours, and why does it hold a special place in your heart?`,
    votes: 928
}, {
    id: 7,
    tags: ["html", "css", "js", "web"],
    username: 'leibee',
    datePosted: 'December 30, 2022',
    title: 'Why learning HTML, CSS, and JavaScript are important for Computer Studies Student?',
    content: `Learning HTML, CSS, and JavaScript is essential for Computer Studies students as these technologies form the backbone of web development. HTML structures the content of web pages, CSS styles them to make them visually appealing, 
                and JavaScript adds interactivity and dynamic behavior. Together, they help students understand how websites function and enable them to create engaging user experiences. These skills provide a foundation for advanced technologies 
                like React and Node.js, opening doors to careers in web development, software engineering, and UI/UX design. Mastering these languages fosters problem-solving, creativity, and the ability to build real-world applications.`,
    votes: 1374
}, {
    id: 8,
    tags: ["q&a", "discussion", "srs"],
    username: 'leibee',
    datePosted: 'March 2, 2024',
    title: 'Do you love youself?',
    content: `Loving yourself means embracing who you are—strengths, flaws, and everything in between. It’s about self-respect, setting boundaries, and prioritizing your well-being. Self-love isn’t selfish; it’s necessary for growth and happiness. 
                When you love yourself, you build confidence, overcome challenges, and inspire others to value themselves too. So, yes, love yourself!`,
    votes: 0
}].map((productDetails) => {
    return new Post(productDetails);
});