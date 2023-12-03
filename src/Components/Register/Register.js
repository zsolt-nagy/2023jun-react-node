import React, { useState } from "react";

export default function Register(props) {
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePassword1Change(e) {
        setPassword1(e.target.value);
    }

    function handlePassword2Change(e) {
        setPassword2(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password1, password2);
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-row">
                <label htmlFor="new-username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="new-username"
                    autoComplete="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>
            <div className="form-row">
                <label htmlFor="password1">Password</label>
                <input
                    type="password1"
                    name="password1"
                    id="password1"
                    value={password1}
                    autoComplete="new-password"
                    onChange={handlePassword1Change}
                    required
                />
            </div>
            <div className="form-row">
                <label htmlFor="password2">Confirm Password</label>
                <input
                    type="password2"
                    name="password2"
                    id="password2"
                    value={password2}
                    autoComplete="new-password"
                    onChange={handlePassword2Change}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Register
            </button>
        </form>
    );
}
