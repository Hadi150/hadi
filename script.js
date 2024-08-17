const circle = document.getElementById('clickableCircle');
const message = document.getElementById('message');

circle.addEventListener('click', () => {
    message.textContent = "i love you.";
});

function resetMessage() {
    message.textContent = "aa sayang vania";
}