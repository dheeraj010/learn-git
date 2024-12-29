// Version control demonstration
console.log("Welcome to Git learning project - v3.0");

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// Add a greeting function with user's name
function getGreeting(userName = "") {
  const hour = new Date().getHours();
  let greeting;
  if (hour < 6) greeting = "Good night";
  else if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else if (hour < 22) greeting = "Good evening";
  else greeting = "Good night";

  return userName ? `${greeting}, ${userName}! 👋` : greeting;
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
