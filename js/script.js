  document.addEventListener("DOMContentLoaded", () => {
    const dateTimeElement = document.getElementById("footer-date-time");
    function updateClock() {
      dateTimeElement.textContent = new Date().toLocaleString();
    }
    updateClock(); 
    setInterval(updateClock, 1000);
  });
