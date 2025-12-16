console.clear();
const firstInput = document.querySelector('[data-js="first-input"]');
const upperCaseButton = document.querySelector('[data-js="button-uppercase"]');

upperCaseButton.addEventListener("click", () => {
    firstInput.value = firstInput.value.toUpperCase();
});
