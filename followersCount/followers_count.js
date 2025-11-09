let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}

function checkCountValue() {
  if (count === 10) {
    setTimeout(() => {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    }, 100); // Wait a bit so the count is shown before the alert
  } else if (count === 20) {
    setTimeout(() => {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }, 100); // Wait a bit so the count is shown before the alert
  }
}

function displayCount() {
  document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}

function resetCount() {
  count = 0;
  displayCount(); // Show the 0 first
  setTimeout(() => {
    alert("The Followers count has been reset.");
  }, 100); // Wait a bit so the 0 is shown before the alert
}
