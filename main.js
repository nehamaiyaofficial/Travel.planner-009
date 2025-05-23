
// Function to search for destinations
function searchDestination() {
    const destination = document.getElementById('destination').value;
    
    if (destination === '') {
        alert('Please enter a destination!');
        return;
    }
    
    // Simple search - in real app, this would call the backend
    alert('Searching for trips to ' + destination + '...');
    
    // Redirect to search page (simple way)
    window.location.href = 'search.html';
}

// Function to show place details
function showPlaceDetails(placeName) {
    alert('Showing details for ' + placeName + '\n\nThis feature is coming soon!');
}

// Make buttons work when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Travel Planner website loaded!');
    
    // Add click events to all "View Details" buttons
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const placeCard = button.closest('.place-card');
            const placeName = placeCard.querySelector('h4').textContent;
            showPlaceDetails(placeName);
        });
    });
});

// Simple function to change page title
function updatePageTitle(newTitle) {
    document.title = newTitle + ' - Travel Planner';
}

// Function to show welcome message
function showWelcomeMessage() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    
    console.log(greeting + '! Welcome to Travel Planner!');
}

// Call welcome message when page loads
showWelcomeMessage();

