document.getElementById('jumiaSearch').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.item-card');

    items.forEach(item => {
        const name = item.getAttribute('data-name');
        if (name.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
function startCountdown() {
    const banner = document.getElementById('flashSaleTimer');
    let time = 3600; // 1 hour in seconds

    setInterval(() => {
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        banner.innerHTML = `FLASH SALES - 50% OFF | Ends In: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (time > 0) time--;
    }, 1000);
}
startCountdown();

// Your existing search logic here...
