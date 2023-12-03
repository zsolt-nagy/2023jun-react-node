import React from "react";

export default function UserInfo(props) {
    function handleLogout(event) {
        event.preventDefault();
        props.logoutCallback();
    }

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
