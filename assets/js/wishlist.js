// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Update wishlist count in the UI
function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length > 99 ? '99+' : wishlist.length;
        wishlistCount.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
}

// Add or remove item from wishlist
function toggleWishlist(product) {
    if (!product || !product.id) return false;

    const existingIndex = wishlist.findIndex(item => item.id === product.id);
    let added = false;

    if (existingIndex === -1) {
        // Add to wishlist
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image || ''
        });
        added = true;
    } else {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
    }

    // Save to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update UI
    updateWishlistCount();
    return added;
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// Initialize wishlist on page load
document.addEventListener('DOMContentLoaded', function() {
    updateWishlistCount();
    
    // Initialize wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productId = btn.dataset.productId;
        if (productId && isInWishlist(productId)) {
            btn.classList.add('in-wishlist');
            const icon = btn.querySelector('span');
            if (icon) icon.textContent = '❤️';
        }
    });
});

// Make functions available globally
window.updateWishlistCount = updateWishlistCount;
window.toggleWishlist = toggleWishlist;
window.isInWishlist = isInWishlist;