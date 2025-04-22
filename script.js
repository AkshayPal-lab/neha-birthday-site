function showSurprise() {
    document.getElementById("surprise-content").style.display = "block";
    let timer = 10;
    let countdown = setInterval(function() {
        document.getElementById("timer").textContent = timer;
        timer--;
        if (timer < 0) {
            clearInterval(countdown);
            document.getElementById("timer").style.display = "none";
            document.getElementById("animation").classList.remove("hidden");
        }
    }, 1000);
}
