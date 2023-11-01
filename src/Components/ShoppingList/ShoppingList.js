import React from "react";

function ShoppingItem({ item, quantity }) {
    return (
        <li>
            {item} ( {quantity} ) <button>Delete</button>
        </li>
    );
}

export default function ShoppingList({ items }) {
    const ItemsJsx = items.map((item) => (
        <ShoppingItem key={item.id} id={item.id} item={item.item} quantity={item.quantity} />
    ));

    return <ul>{ItemsJsx}</ul>;
}
