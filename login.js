function login(e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("Email").value;
    var confirmPassword = document.getElementById("Confirmpassword").value;
  
   
    var data = JSON.parse(localStorage.getItem("ListUser"));
    if (CheckUser(username,password, data)) {
        alert("Đăng nhập thành công");
        window.location.href = "sanpham.html"; 
    } else {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
    
};
let btn_login = document.getElementById("btn_login");
btn_login.addEventListener('click', login);

// localStorage.setItem('loggedIn', 'true');
// localStorage.removeItem('loggedIn');

// function addToCart(productName, productPrice) {
//     const loggedIn = localStorage.getItem('loggedIn') === 'true';
//     if (!loggedIn) {
//         alert('ban can dang nhap de mua san pham');
//         return;
//     }

function CheckUser(username,password, ListUser) {
    for (let i = 0; i < ListUser.length; i++) {
        if (ListUser[i].username === username && ListUser[i].password === password) {
            return true;
        }
    }
    return false;
}