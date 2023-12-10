const crypto = require("crypto");

const password = "123456";
const salt = "salt1";

crypto.pbkdf2(password, salt, 310000, 32, "sha256", function (err, hashedPassword) {
    hashedPassword = hashedPassword.toString("hex");
    console.log("error", err);
    console.log("hashedPassword", hashedPassword);
    console.log("36cca5ba601f5004245fb1c7fc7522dca5140f960e8ed883f574bfbe37e385bd" === hashedPassword);
});

const now = new Date().getTime() % 65536;
console.log(now);
