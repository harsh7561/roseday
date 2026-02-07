function startSurprise() {
    playMusic();
    showLove();
}

function playMusic() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.6;
    music.play();
}

function showLove() {
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
