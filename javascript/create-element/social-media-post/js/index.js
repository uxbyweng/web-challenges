console.clear();

function handleLikeButtonClick(event) {
    const buttonElement = event.target;
    buttonElement.classList.toggle("post__button--liked");
}

// const likeButton = document.querySelector('[data-js="like-button"]');
// likeButton.addEventListener("click", handleLikeButtonClick);

// create article
const article = document.createElement("article");
article.classList.add("post");
document.body.append(article);

// create paragraph
const pText = document.querySelector('[class="post__content"]').innerHTML;
const p = document.createElement("p");
p.classList.add("post__content");
p.textContent = pText;
article.append(p);

// create footer
const footer = document.createElement("footer");
footer.classList.add("post__footer");
article.append(footer);

// create @username
const userName = document.querySelector('[class="post__username"]').innerHTML;
const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = userName;
footer.append(span);

// create button
const btnText = document.querySelector('[data-js="like-button"]').innerHTML;
const button = document.createElement("button");
// button.addEventListener("click", handleLikeButtonClick);
button.setAttribute("type", "button");
button.classList.add("post__button");
button.setAttribute("data-js", "like-button");
button.textContent = btnText;
footer.append(button);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", handleLikeButtonClick));
