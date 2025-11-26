// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count in the UI
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = totalItems > 99 ? '99+' : totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Add item to cart
function addToCart(product) {
    // Check if product already exists in cart
    const existingItem = cart.find(item => 
        item.id === product.id && 
        item.size === product.size && 
        item.color === product.color
    );

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + (product.quantity || 1);
    } else {
        cart.push({...product, quantity: product.quantity || 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Item added to cart!');
    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        showNotification('Item removed from cart', true);
    }
}

// Update cart display in dropdown
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartTotalAmount = document.getElementById('cartTotalAmount');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');

    if (!cartItems) return;

    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';

    let itemsHtml = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        total += itemTotal;

        itemsHtml += `
            <div class="flex items-start py-3 border-b border-gray-200">
                <img src="${item.image || 'https://via.placeholder.com/64'}" 
                     alt="${item.name}" 
                     class="w-16 h-16 object-cover rounded-lg mr-3">
                <div class="flex-1">
                    <h4 class="font-medium text-sm">${item.name}</h4>
                    ${item.size ? `<p class="text-xs text-gray-500">Size: ${item.size}</p>` : ''}
                    ${item.color ? `<p class="text-xs text-gray-500">Color: ${item.color}</p>` : ''}
                    <p class="text-sm">Qty: ${item.quantity || 1}</p>
                    <p class="text-sm font-medium">₹${item.price?.toFixed(2) || '0.00'}</p>
                </div>
                <button onclick="removeFromCart(${index})" 
                        class="text-red-500 hover:text-red-700 text-sm">
                    Remove
                </button>
            </div>
        `;
    });

    if (cartItems) cartItems.innerHTML = itemsHtml;
    if (cartTotalAmount) cartTotalAmount.textContent = `₹${total.toFixed(2)}`;
}

// Show notification
function showNotification(message, isError = false) {
    // Remove any existing notifications
    document.querySelectorAll('.notification').forEach(el => el.remove());
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="fixed bottom-4 right-4 p-3 rounded-lg shadow-lg z-50 
                    ${isError ? 'bg-red-500' : 'bg-green-500'} 
                    text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                ${isError ? 
                    '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>' :
                    '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>'
                }
            </svg>
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove notification after delay
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize cart on page load
function initializeCart() {
    // Initialize cart from localStorage
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Update UI
    updateCartCount();
    updateCartDisplay();
    
    // Set up cart button toggle
    const cartButton = document.getElementById('cartButton');
    const cartDropdown = document.getElementById('cartDropdown');
    const closeCart = document.getElementById('closeCart');
    
    if (cartButton && cartDropdown) {
        cartButton.addEventListener('click', (e) => {
            e.stopPropagation();
            cartDropdown.classList.toggle('hidden');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            if (cartDropdown) cartDropdown.classList.add('hidden');
        });
    }
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartDropdown && !cartDropdown.contains(e.target) && 
            cartButton && !cartButton.contains(e.target)) {
            cartDropdown.classList.add('hidden');
        }
    });
    
    console.log('Cart initialized with', cart.length, 'items');
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCart);
} else {
    initializeCart();
}

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartCount = updateCartCount;
window.updateCartDisplay = updateCartDisplay;
window.showNotification = showNotification;
