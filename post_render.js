/**
 * renderPostViewerPage() renders the viewer page 
 * @param {Post} post_content Post instance containing its details, such as title, description, etc.
 */
function renderPostViewerPage(post_content) {
	const main_content = document.getElementById("main-content");

	const back_button = document.createElement("div");
	back_button.setAttribute("id", "back-button");

	const back_icon = document.createElement("img");
	back_icon.setAttribute("class", "button-svg");
	back_icon.setAttribute("id", "back-icon");
	back_icon.setAttribute("src", "/assets/svg/chevron-left-svgrepo-com.svg");

	/* display the post title. */
	const post_header = document.createElement("h1");
	post_header.setAttribute("id", "post-header");
	post_header.textContent = post_content.title;

	/* display the post creator. */
	const post_creator = document.createElement("p");
	post_creator.setAttribute("id", "post-creator");
	post_creator.textContent = post_content.user;

	/* display the  */
}