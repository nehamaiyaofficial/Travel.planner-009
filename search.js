// Enhanced search with Indian destinations and INR pricing
function doSearch() {
    const where = document.getElementById('where').value.trim();
    const when = document.getElementById('when').value;
    const budget = document.getElementById('budget').value;
    
    if (!where) {
        alert('🏝️ Please enter where you want to go!');
        return;
    }
    
    // Enhanced results with real Indian and international destinations
    const results = generateSearchResults(where, budget);
    displayEnhancedResults(results);
}

function generateSearchResults(destination, budget) {
    const destinations = [
        {
            name: `${destination} Heritage Tour`,
            price: `₹${Math.floor(Math.random() * 50000) + 25000}`,
            description: `Explore the rich culture and heritage of ${destination}`,
            image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=200&fit=crop',
            duration: '5-7 days',
            includes: ['🏨 Hotel', '🍽️ Meals', '🚌 Transport']
        },
        {
            name: `${destination} Adventure Package`, 
            price: `₹${Math.floor(Math.random() * 75000) + 35000}`,
            description: `Thrilling adventures and activities in ${destination}`,
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
            duration: '7-10 days',
            includes: ['⛰️ Trekking', '🏕️ Camping', '📸 Photography']
        }
    ];
    
    return destinations;
}
