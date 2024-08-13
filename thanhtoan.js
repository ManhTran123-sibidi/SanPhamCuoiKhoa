document.addEventListener('DOMContentLoaded', function() {
   
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let checkoutContainer = document.getElementById('checkout-container');
    let totalPriceElement = document.getElementById('total-price');
    let checkoutButton = document.getElementById('checkout-button');
    let totalPrice = 0;

    if (cart.length === 0) {
        checkoutContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
    } else {
        cart.forEach(product => {
            let productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <p>Tên sản phẩm: ${product.name}</p>
                <p>Giá: ${product.price} VND</p>
                <p>Số lượng: ${product.quantity || 1}</p>
            `;
            checkoutContainer.appendChild(productItem);

   
            totalPrice += product.price * (product.quantity || 1);
        });

        
        totalPriceElement.textContent = `Tổng giá: ${totalPrice} VND`;
    }

  
    checkoutButton.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Giỏ hàng của bạn đang trống!');
        } else {
            alert(`Thanh toán thành công! Tổng số tiền là ${totalPrice} VND`);
            localStorage.removeItem('cart');
            window.location.reload();
        }
    });
});