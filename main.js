// Version control demonstration
console.log("Welcome to Git learning project - v2.0");

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// Add a greeting function
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}

// Log the current time and greeting when the script loads
console.log(`${getGreeting()} Current time: ${getCurrentTime()}`);

// This comment will help us demonstrate git diff later
