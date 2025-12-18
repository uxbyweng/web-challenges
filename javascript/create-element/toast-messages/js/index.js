console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerHTML = `I'm a toast message.`;
    li.classList.add("toast-container__message");
    toastContainer.append(li);
});

clearButton.addEventListener("click", () => {
    toastContainer.innerHTML = "";
});
