document.addEventListener("DOMContentLoaded", () => {
    function updateTime(){
        const time = document.getElementById("time");
        var currentTime = new Date().toLocaleString();
        time.innerHTML = currentTime

    }
    setInterval(updateTime, 1000);
});