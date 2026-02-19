function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    document.getElementById("time").firstChild.nodeValue =
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    document.getElementById("ampm").textContent = ampm;
    document.getElementById("seconds").textContent =
        seconds.toString().padStart(2, "0");

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    document.getElementById("date").textContent =
        `${dayName}/${monthName}/${year}`;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
