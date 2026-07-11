// Load all Tenor GIFs
const script = document.createElement("script");
script.src = "https://tenor.com/embed.js";
script.async = true;
document.body.appendChild(script);

// Optional: Pop animation when page loads
window.addEventListener("load", () => {
    const card = document.querySelector(".container");

    card.animate(
        [
            { transform: "scale(0.8)", opacity: 0 },
            { transform: "scale(1)", opacity: 1 }
        ],
        {
            duration: 800,
            easing: "ease-out"
        }
    );
});

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let size = 1;

function moveButton() {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 70;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    size += 0.15;
    yesBtn.style.transform = `scale(${size})`;
}
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

// Redirect to another page
yesBtn.addEventListener("click", () => {
    window.location.href = "success.html";
});