let ListUser = JSON.parse(localStorage.getItem('ListUser'));
if(ListUser == null){
    localStorage.setItem('ListUser', JSON.stringify([]));
    window.location.reload();
}
function signup(e) {
    e.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("Confirmpassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; 
    }

    var user = {
        username: username,
        email: email,
        password: password
    };

    if (CheckUser(username, ListUser)) {
        alert('tai khoan da ton tai');
        return;
    } else {
        ListUser.push(user);
        localStorage.setItem('ListUser', JSON.stringify(ListUser));
        alert('Dang ky thanh cong');
        window.location.href = "sanpham.html";
    }  
    
    // var json = JSON.stringify(user);
    // localStorage.setItem(username, json);
    // alert('Đăng ký thành công');
    // window.location.href = "sanpham.html";
};

let btn_signup = document.getElementById("btn_signup");
btn_signup.addEventListener('click', signup);

function CheckUser(username , ListUser) {
    for (let i = 0; i < ListUser.length; i++) {
        if (ListUser[i].username === username) {
            return true;
        }
    }
    return false;
}