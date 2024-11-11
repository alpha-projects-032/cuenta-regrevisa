function startCountdown(targetDate, daysId, hoursId, minutesId, secondsId) {
    const countdownDate = new Date(targetDate).getTime();

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(daysId).innerText = days;
        document.getElementById(hoursId).innerText = hours;
        document.getElementById(minutesId).innerText = minutes;
        document.getElementById(secondsId).innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById(daysId).innerText = "0";
            document.getElementById(hoursId).innerText = "0";
            document.getElementById(minutesId).innerText = "0";
            document.getElementById(secondsId).innerText = "0";
        }
    }, 1000);
}

// Inicia la cuenta regresiva para cada contenedor con una fecha diferente
startCountdown("December 24, 2024 00:00:00", "days1", "hours1", "minutes1", "seconds1");
startCountdown("December 25, 2024 00:00:00", "days2", "hours2", "minutes2", "seconds2");
startCountdown("December 31, 2024 00:00:00", "days3", "hours3", "minutes3", "seconds3");
startCountdown("December 23, 2024 00:00:00", "days4", "hours4", "minutes4", "seconds4");
startCountdown("January 6, 2025 00:00:00", "days5", "hours5", "minutes5", "seconds5");

