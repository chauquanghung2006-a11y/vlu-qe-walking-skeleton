function login(username, password) {
    return username === "admin" && password === "1234";
}

// Xử lý form đăng nhập trên trang HTML
if (typeof document !== "undefined") {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            if (login(username, password)) {
                message.textContent = "Đăng nhập thành công!";
            } else {
                message.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
            }
        });
    }
}

// Export hàm để Jest có thể Unit Test
if (typeof module !== "undefined") {
    module.exports = { login };
}
