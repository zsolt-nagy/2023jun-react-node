import "./App.css";

import React, { useState, useEffect } from "react";

import ShoppingForm from "./Components/ShoppingForm/ShoppingForm";
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import Login from "./Components/Login/Login";
import UserInfo from "./Components/UserInfo/UserInfo";
import Register from "./Components/Register/Register";

function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false); // TODO: temporary

    // TODO: temporary
    function pretendLoggedIn() {
        setLoggedIn(true);
    }

    // TODO: temporary
    function pretendLogout() {
        setLoggedIn(false);
    }

    // TODO: temporary
    function pretendRegistration(username, password) {
        fetch("https://cgrf4m-8080.csb.app/register", {
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
                console.log("registration response:", response);
            });
    }

    function loadData() {
        fetch("https://cgrf4m-8080.csb.app/api/list")
            .then((x) => x.json())
            .then((response) => setShoppingList(response));
    }

    useEffect(loadData, []);

    function addItem(item, quantity) {
        fetch("https://cgrf4m-8080.csb.app/api/list/new", {
            method: "POST",
            body: JSON.stringify({
                item,
                quantity,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        })
            .then((x) => x.json())
            .then(loadData);
    }

    function deleteItem(id) {
        fetch(`https://cgrf4m-8080.csb.app/api/list/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        })
            .then((x) => x.json())
            .then(loadData);
    }

    function updateItem(id, itemName, quantity) {
        fetch(`https://cgrf4m-8080.csb.app/api/list/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                item: itemName,
                quantity,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "cors",
        })
            .then((x) => x.json())
            .then(loadData);
    }

    const LoggedInContent = (
        <>
            <UserInfo logoutCallback={pretendLogout} />
            <ShoppingForm submitItem={addItem} />
            <ShoppingList items={shoppingList} deleteItem={deleteItem} updateItem={updateItem} />
        </>
    );

    const LoggedOutContent = (
        <>
            <Login loggedInCallback={pretendLoggedIn} />
            <Register registerCallback={pretendRegistration} />
        </>
    );

    const Content = isLoggedIn ? LoggedInContent : LoggedOutContent;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Shopping List</h1>
            </header>

            <main>{Content}</main>
        </div>
    );
}

export default App;
