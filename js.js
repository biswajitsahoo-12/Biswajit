let cart = [];

function addToCart(name, price) {
    let item = cart.find(product => product.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

function loadCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<p>${item.name} x ${item.quantity} - $${item.price * item.quantity}</p>`;
        cartItems.appendChild(div);
        total += item.price * item.quantity;
    });
    totalPrice.textContent = `Total: $${total}`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        loadCart();
    }
});
