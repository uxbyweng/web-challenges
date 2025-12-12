console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// Switch to Dark Mode
darkModeButton.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});

// Switch to Light Mode
lightModeButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});

// Toggle between Light and Dark Mode
toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});
