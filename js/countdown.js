// Fecha y hora de Navidad
const countdownDate = new Date("December 25, 2024 00:00:00").getTime();

// Actualiza cada segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Detener el intervalo cuando llegue la fecha
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-container").innerHTML = "<h2>¡Feliz Navidad! 🎄</h2>";
    }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-audio");
    audio.play().catch(error => {
        console.log("El navegador ha bloqueado la reproducción automática del audio. Haz clic para activarlo.");
    });
});
