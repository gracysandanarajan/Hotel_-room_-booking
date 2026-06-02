// 1. FILTER FUNCTIONALITY FOR ROOMS SECTION (STANDARD / DELUXE)
function sortSuites(selectedCategory) {
    // Toggle active design styles on click buttons
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => pill.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Grid animation sorting mechanism
    const cards = document.querySelectorAll('.suite-card');
    cards.forEach(card => {
        const itemType = card.getAttribute('data-category');
        
        if (selectedCategory === 'all') {
            card.style.display = 'block';
        } else {
            if (itemType === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// 2. CONTACT FORM INQUIRY SUBMISSION HANDLE
function handleInquiry(event) {
    event.preventDefault();
    alert("✦ Thank you! Your elite reservation request has been transmitted safely to LuxeStay Desk Coordinators.");
    document.getElementById('bookingForm').reset();
}