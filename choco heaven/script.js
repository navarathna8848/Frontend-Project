// Simulate search functionality
function searchCakes() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        alert(`Searching for "${query}"...`);
    } else {
        alert('Please enter a search term!');
    }
}

//slider.js

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${newTransformValue}%)`;
}

//signup.js

// Get form and add event listener
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Simulate success message
    alert(`Thank you for signing up, ${name}!`);
    signupForm.reset(); // Reset form
});


//cart.js

function updateQuantity(button, change) {
    // Locate the cart item row
    const cartItem = button.closest('.cart-item');
    
    // Update the quantity
    const quantitySpan = cartItem.querySelector('.quantity-value');
    let quantity = parseInt(quantitySpan.textContent);
    quantity = Math.max(1, quantity + change); // Ensure quantity doesn't go below 1
    quantitySpan.textContent = quantity;

    // Update the total for the item
    const price = parseFloat(cartItem.querySelector('.price').textContent.slice(1)); // Remove $ and parse
    const total = (quantity * price).toFixed(2);
    cartItem.querySelector('.total').textContent = `$${total}`;

    // Update the subtotal
    updateSubtotal();
}

function updateSubtotal() {
    const totals = document.querySelectorAll('.cart-item .total');
    let subtotal = 0;

    totals.forEach((total) => {
        subtotal += parseFloat(total.textContent.slice(1)); // Remove $ and parse
    });

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
}

function proceedToCheckout() {
    // Simulate proceeding to checkout
    alert("Redirecting to the checkout page...");
    // Redirect to a checkout page (example URL)
    window.location.href = "checkout.html";
}


//order.js

function trackOrder(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const orderId = document.getElementById("order-id").value;
    const statusDiv = document.getElementById("order-status");

    // Simulated order statuses
    const orderData = {
        "12345": "Your order is being prepared.",
        "67890": "Your order is out for delivery.",
        "11223": "Your order has been delivered!",
    };

    if (orderData[orderId]) {
        statusDiv.textContent = `Order Status: ${orderData[orderId]}`;
        statusDiv.style.color = "#b7e4c7";
    } else {
        statusDiv.textContent = "Order ID not found. Please check and try again.";
        statusDiv.style.color = " #d90429";
    }
}
