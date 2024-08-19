// script.js
document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date and time here
  
    function updateCountdown() {
      const now = new Date();
      const timeDiff = targetDate - now;
  
      if (timeDiff <= 0) {
        document.getElementById("countdown").innerHTML = "<h2 class='text-2xl font-bold text-center text-red-600'>Event Started!</h2>";
        return;
      }
  
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }
  
    // Update countdown every second
    setInterval(updateCountdown, 1000);
  
    // Initial call to display the countdown immediately
    updateCountdown();
  });
  