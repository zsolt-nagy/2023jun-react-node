import React, { useState } from "react";

export default function ShoppingForm({
    submitItem,
    submitButtonText = "Add",
    defaultItemName = "",
    defaultQuantity = "",
}) {
    const [item, setItem] = useState(defaultItemName);
    const [num, setNum] = useState(defaultQuantity); // quantity

    function handleSubmit(event) {
        event.preventDefault();
        submitItem(item, num);
        setItem("");
        setNum("");
    }

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleQuantityChange(event) {
        setNum(event.target.value);
    }

    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="item"></label>
            <input type="text" id="item" name="item" value={item} onChange={handleItemChange} required />
            <label htmlFor="quantity"></label>
            <input type="number" id="quantity" name="quantity" value={num} onChange={handleQuantityChange} required />
            <button type="submit">{submitButtonText}</button>
        </form>
    );
}
