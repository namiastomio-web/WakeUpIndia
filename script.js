console.log("welcome to wakeUpIndia");

document.getElementById("year").addEventListener("change", function () {
    const year = this.value;

    if (year === "2026") {
        window.location.href = "Kalahandi/2026.html";
    }
});
