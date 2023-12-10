import React, { useState } from "react";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("");
        console.log(username, password);

        fetch("https://cgrf4m-8080.csb.app/login/password", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        })
            .then((x) => x.json())
            .then((response) => {
                if (response?.status === 200) {
                    props.loggedInCallback();
                } else {
                    setError(response.message);
                }
            });

        setUsername("");
        setPassword("");
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-row">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>
            <div className="form-row">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <div className="error">{error}</div>
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    );
}
