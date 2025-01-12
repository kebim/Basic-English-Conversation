// JavaScript to fetch the visit count and display it
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the visit counter from the PHP file
    fetch('counter.php')
        .then(response => response.text())
        .then(data => {
            // Display the counter value in the footer
            document.getElementById('visitCounter').textContent = data;
        })
        .catch(error => {
            console.error('Error fetching the counter:', error);
        });
});
