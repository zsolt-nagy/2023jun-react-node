import React, { useState } from "react";
import ShoppingForm from "../ShoppingForm/ShoppingForm";

function ShoppingItem({ id, itemName, quantity, deleteItem, updateItem }) {
    const [isEdit, setEdit] = useState(false);

    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    function handleEdit(event) {
        event.preventDefault();
        setEdit((oldEditBoolean) => !oldEditBoolean);
    }

    function handleUpdate(itemName, quantity) {
        updateItem(id, itemName, quantity);
        setEdit(false);
    }

    const ReadOnlyJsx = (
        <span>
            {itemName} ( {quantity} )
        </span>
    );

    const EditJsx = (
        <ShoppingForm
            submitItem={handleUpdate}
            submitButtonText="Update"
            defaultItemName={itemName}
            defaultQuantity={quantity}
        />
    );

    return (
        <li>
            {isEdit ? EditJsx : ReadOnlyJsx}
            <button onClick={handleDelete} disabled={isEdit}>
                Delete
            </button>
            <button onClick={handleEdit}>{isEdit ? "Cancel" : "Edit"}</button>
        </li>
    );
}

export default function ShoppingList({ items, deleteItem, updateItem }) {
    const ItemsJsx = items.map((item) => (
        <ShoppingItem
            key={item.id}
            id={item.id}
            itemName={item.item}
            quantity={item.quantity}
            deleteItem={deleteItem}
            updateItem={updateItem}
        />
    ));

    return <ul>{ItemsJsx}</ul>;
}
