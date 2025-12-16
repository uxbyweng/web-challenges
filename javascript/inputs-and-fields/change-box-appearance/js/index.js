console.clear();

// BOX
const box = document.querySelector('[data-js="box"]');

// INPUTS
const colorInput = document.querySelector('[data-js="input-color"]');
const radiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

colorInput.addEventListener("input", () => {
    box.style.backgroundColor = `hsl(${colorInput.value}, 80%, 50%)`;
});

radiusInput.addEventListener("input", () => {
    box.style.borderRadius = `${radiusInput.value}%`;
});

rotationInput.addEventListener("input", () => {
    console.log(rotationInput.value);
    box.style.transform = `rotate(${rotationInput.value}deg)`;
});
