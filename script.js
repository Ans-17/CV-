// Function to toggle dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Function to set theme based on time
function setTimeBasedTheme() {
    const hour = new Date().getHours();
    if (hour >= 18 || hour < 6) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Set the initial theme based on time
setTimeBasedTheme();
