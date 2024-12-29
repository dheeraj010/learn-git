// Features for Git Learning Project - v3.0
function updateTimeDisplay() {
  const timeDisplay = document.getElementById("timeDisplay");
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: use24Hour ? "2-digit" : "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: !use24Hour,
  };

  const greeting = getGreeting(userPrefs.name);
  timeDisplay.innerHTML = `
        <h2>${greeting}</h2>
        <p>Current Date & Time:<br>
        ${now.toLocaleDateString("en-US", options)}</p>
    `;
}

// Add clock format preference
let use24Hour = localStorage.getItem("use24Hour") === "true";

function toggleClockFormat() {
  use24Hour = !use24Hour;
  localStorage.setItem("use24Hour", use24Hour);
  updateTimeDisplay();
  updateClockButton();
}

function updateClockButton() {
  const clockBtn = document.getElementById("clockFormat");
  clockBtn.textContent = `Switch to ${use24Hour ? "12" : "24"} Hour`;
}

function handleNameSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (!name) {
    nameInput.classList.add("error");
    setTimeout(() => nameInput.classList.remove("error"), 1500);
    return;
  }

  userPrefs.setName(name);
  updateTimeDisplay();
  nameInput.value = "";
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

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  updateTimeDisplay();
  updateClockButton();

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Set initial name input value
  document.getElementById("nameInput").value = userPrefs.name;
});
