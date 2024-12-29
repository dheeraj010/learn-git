// Version control demonstration
console.log("Welcome to Git learning project - v3.0");

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// Add a greeting function with user's name
function getGreeting(userName = "") {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  return userName ? `${greeting}, ${userName}!` : greeting;
}

// Add user preferences
const userPrefs = {
  name: localStorage.getItem("userName") || "",
  setName(name) {
    this.name = name;
    localStorage.setItem("userName", name);
  },
};

// Log the current time and greeting when the script loads
console.log(`${getGreeting(userPrefs.name)} Current time: ${getCurrentTime()}`);

// This comment will help us demonstrate git diff later
