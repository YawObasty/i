// 1. Search Functionality
const searchInput = document.getElementById('jumiaSearch');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.item-card');

        items.forEach(item => {
            const name = item.getAttribute('data-name');
            // Improved search: check if query is in the data-name attribute
            if (name && name.toLowerCase().includes(query)) {
                item.style.display = 'flex'; // Use flex to maintain card layout
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// 2. Flash Sale Timer
function startCountdown() {
    const banner = document.getElementById('flashSaleTimer');
    if (!banner) return; 

    let time = 3600; // 1 hour in seconds

    const timerInterval = setInterval(() => {
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        
        banner.innerHTML = `FLASH SALES - 50% OFF | Ends In: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (time <= 0) {
            clearInterval(timerInterval);
            banner.innerHTML = "FLASH SALE ENDED!";
        } else {
            time--;
        }
    }, 1000);
}

// 3. NEW: Interactive Wishlist (Heart Toggle)
document.querySelectorAll('.wishlist-btn').forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('bx-heart');
        icon.classList.toggle('bxs-heart'); // Changes outline to solid
        
        if (icon.classList.contains('bxs-heart')) {
            icon.style.color = '#ff4d4d';
            // Simple toast notification (Optional)
            console.log("Item saved to your wishlist!");
        } else {
            icon.style.color = '';
        }
    });
});

// 4. NEW: Marketing Popup (Delayed 10 Seconds)
function showMarketingPopup() {
    // Only show if the user hasn't seen it this session
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {
            const message = "🎁 SPECIAL OFFER: Get 10% off your first Logo Design!\n\nSimply mention 'OBSTY-PRO' when you message me on WhatsApp.";
            alert(message);
            sessionStorage.setItem('popupShown', 'true');
        }, 10000); // 10 second delay
    }
}

// 5. NEW: Sidebar Animation Logic
document.querySelectorAll('.sidebar li').forEach(li => {
    li.addEventListener('mouseenter', () => {
        const icon = li.querySelector('i');
        if(icon) icon.style.transform = 'scale(1.3)';
    });
    li.addEventListener('mouseleave', () => {
        const icon = li.querySelector('i');
        if(icon) icon.style.transform = 'scale(1)';
    });
});

// Initialize all functions
window.onload = () => {
    startCountdown();
    showMarketingPopup();
};
