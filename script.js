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
