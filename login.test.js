const { login } = require("./login");

describe("Login Function", () => {

    test("Đăng nhập đúng username và password phải trả về true", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Sai username phải trả về false", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Sai password phải trả về false", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Sai cả username và password phải trả về false", () => {
        expect(login("user", "456")).toBe(false);
    });

});
