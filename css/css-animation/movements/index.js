/*  -----------------------------------------------------------
            Challenge 1: Card Background Fade
---------------------------------------------------------------- */
// ### Challenge 1: Card Background Fade

// * **Goal:** Implement a smooth **background color fading** animation on a card element.
// * **Interaction:** When a button is clicked, the background color of the card should change to a new color with a smooth fading effect.
// * **Hints:**
//   * Use CSS `transition` on the `background-color` property for the fading effect.
//   * In JavaScript, select the card and button elements.
//   * Add an **event listener** to the button.
//   * Define an array of different colors. On each click, update the card's `background-color` style property to the next color in your array.

const changeColorButton = document.querySelector("[data-js=changeColorButton]");
const colorChangeCard = document.querySelector("[data-js=colorChangeCard]");
const colors = ["#e0f7fa", "#ffe0b2", "#c8e6c9", "#ffccbc", "#d1c4e9"]; // Light pastel colors
let currentColorIndex = 0;

changeColorButton.addEventListener("click", () => {
    // Add your solution below
    const newCurrentColorIndex = currentColorIndex + 1;
    console.log(newCurrentColorIndex);
    console.log(colors[currentColorIndex]);
    colorChangeCard.style.backgroundColor = colors[newCurrentColorIndex];
    currentColorIndex = newCurrentColorIndex;
});

/*  -----------------------------------------------------------
            Challenge 2: Button Hover Size Change
---------------------------------------------------------------- */

// No JavaScript needed as CSS :hover pseudo-class handles the animation.
// We included a basic click active state for completeness.

/*  -----------------------------------------------------------
            Challenge 3: Loading Spinner Toggle
---------------------------------------------------------------- */
const toggleLoaderButton = document.querySelector("[data-js=toggleLoaderButton]");
const loaderContainer = document.querySelector("[data-js=loaderContainer]");
let loaderActive = false;

toggleLoaderButton.addEventListener("click", () => {
    console.log(loaderActive);
    loaderContainer.classList.toggle("active");
    loaderActive = true;
});

/*  -----------------------------------------------------------
            Challenge 4: Slide-in Div
---------------------------------------------------------------- */
const slideInButton = document.querySelector("[data-js=slideInButton]");
const slideInBox = document.querySelector("[data-js=slideInBox]");

slideInButton.addEventListener("click", () => {
    slideInBox.classList.toggle("active");
});
