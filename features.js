// Features for Git Learning Project - v2.0
function updateTimeDisplay() {
  const timeDisplay = document.getElementById("timeDisplay");
  const now = new Date();

  // Format the date and time nicely
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const greeting = getGreeting();
  timeDisplay.innerHTML = `
        <h2>${greeting}</h2>
        <p>Current Date & Time:<br>
        ${now.toLocaleDateString("en-US", options)}</p>
    `;
}

// Add a color theme toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
}

// Update the time every second
setInterval(updateTimeDisplay, 1000);

// Initialize time display and theme
document.addEventListener("DOMContentLoaded", () => {
  updateTimeDisplay();

  // Check for saved theme preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
