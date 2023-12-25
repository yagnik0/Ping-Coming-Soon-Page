const idSelect = document.getElementById("email");
const errorMessage = document.querySelector(".error-text");
const buttonSelect = document.querySelector(".btn-primary");

buttonSelect.addEventListener('click', () => {
    if (!idSelect.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errorMessage.classList.remove('hidden');
        idSelect.style.border = "1px solid hsl(354, 100%, 66%)";
    } else {
        errorMessage.classList.add('hidden');
        idSelect.style.border = "1px solid #222";
    }
})