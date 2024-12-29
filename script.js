// Wait for the page to load before executing the code
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    const colorButton = document.getElementById("colorButton");

    // Add an event listener to the button for changing background color
    colorButton.addEventListener("click", function() {
        document.body.style.backgroundColor = getRandomColor();
    });
});

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}