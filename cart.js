// Khi trang giỏ hàng được tải
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-container'); // Đây là phần tử HTML nơi bạn muốn hiển thị giỏ hàng

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Bạn chưa thêm gì vào giỏ hàng</p>';
    } else {
        cart.forEach(product => {
            let productItem = document.createElement('div');
            productItem.classList.add('cart-item');
            productItem.innerHTML = `
                <p>Tên sản phẩm: ${product.name}</p>
                <p>Giá: ${product.price} VND</p>
            `;
            cartContainer.appendChild(productItem);
        });
    }
});
