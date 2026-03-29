// 1. Search Functionality
const searchInput = document.getElementById('jumiaSearch');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.item-card');

        items.forEach(item => {
            const name = item.getAttribute('data-name');
            if (name && name.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// 2. Flash Sale Timer
function startCountdown() {
    const banner = document.getElementById('flashSaleTimer');
    if (!banner) return; // Prevents errors if the element isn't there

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

// Start the timer when the page loads
startCountdown();
