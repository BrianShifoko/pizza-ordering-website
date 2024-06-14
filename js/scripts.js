document.addEventListener('DOMContentLoaded', () => {
    // Initialize order and track order counts
    let orderCount = 0;
    let trackOrderCount = 0;

    // Update the displayed counts
    document.getElementById('order-count').textContent = orderCount;
    document.getElementById('track-order-count').textContent = trackOrderCount;

    // Animate "Pizza Order" name
    const brandName = document.getElementById('brand-name');
    const text = brandName.textContent;
    brandName.innerHTML = '';
    text.split('').forEach((letter, i) => {
        const span = document.createElement('span');
        span.style.setProperty('--delay', i);
        span.textContent = letter;
        brandName.appendChild(span);
    });

    // Placeholder for future interactivity
    // Example: Function to dynamically update discounts
    function updateDiscounts() {
        const discounts = document.querySelectorAll('.carousel-discount');
        discounts.forEach((discount, index) => {
            // Example: Change discount dynamically
            discount.textContent = `${10 + index * 5}% Off`;
        });
    }

    // Call the placeholder function (for demonstration purposes)
    updateDiscounts();
});
