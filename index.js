let display = {
    days: document.querySelector("#days"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
};

// Időzítő referencia a korábbi intervallum törlésére
let countdownInterval = null;

// Visszaszámlálás indítása
function startCountdown(duration, display) {
    clearInterval(countdownInterval); // Korábbi időzítő törlése

    let timer = duration;

    countdownInterval = setInterval(() => {
        let days = Math.floor(timer / (60 * 60 * 24));
        let hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((timer % (60 * 60)) / 60);
        let seconds = Math.floor(timer % 60);

        display.days.textContent = days;
        display.hours.textContent = hours;
        display.minutes.textContent = minutes;
        display.seconds.textContent = seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            alert("BOLDOG SZÜLINAPOT!")
        }
    }, 1000);
}

// Egy nap másodpercekben
let one_day = 60 * 60 * 24;

function changeName() {
    let name = document.getElementById('name');
    let present_date = new Date(); // Mindig frissül a jelenlegi dátum

    let birthday;
    let Result;

    if (name.innerText === 'HANGA') {
        name.innerText = 'DALMA';
        birthday = new Date(present_date.getFullYear(), 4, 24); // Április 24.
    } else {
        name.innerText = 'HANGA';
        birthday = new Date(present_date.getFullYear(), 0, 31); // Január 31.
    }

    // Ha a születésnap már elmúlt az adott évben
    if (present_date > birthday) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }

    // Különbség kiszámítása másodpercekben
    Result = Math.floor((birthday - present_date) / 1000);
    console.log(`Különbség másodpercekben: ${Result}`);

    startCountdown(Result, display);
};
