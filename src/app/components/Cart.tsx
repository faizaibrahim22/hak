"use client"
import React, { useState, useEffect } from "react"
import { Product } from "../../../types/products"
import { getCartItems, removeFromCart } from "../actions/action"
import { updateCartQuantity } from "../actions/action"
import Swal from "sweetalert2"

const Page = () => {
    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getCartItems(); // Agar yeh async function hai
            setCartItems(items);
        };
        fetchCartItems();
    }, [])

    const handleRemove = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You will not recover this item!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!",
        });
        if (result.isConfirmed) {
            await removeFromCart(id);
            const updatedItems = await getCartItems(); // Wait for updated cart items
            setCartItems(updatedItems); // Set the latest cart items
        }
    }

    const handleQuantityChange = async (id: string, quantity: number) => {
        await updateCartQuantity(id, quantity);
        const updatedItems = await getCartItems(); // Wait for updated cart items
        setCartItems(updatedItems); // Refresh cart items after updating quantity
    }

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
            const currentQuantity = product.quantity ?? 0;
            handleQuantityChange(id, currentQuantity + 1); // Increment quantity
        }
    }

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) {
            const currentQuantity = product.quantity ?? 0;
            if (currentQuantity > 0) {
                handleQuantityChange(id, currentQuantity - 1); // Decrement quantity, but not below 0
            }
        }
    }


    return (
        <div>
            <div>


                {cartItems.map((item, index) => (
                    <div key={item._id || index}> {/* Fallback to index if _id is missing */}
                        <h3>{item.productsName}</h3>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity ?? 0}</p>
                        <button onClick={() => handleRemove(item._id)}>Remove</button>
                        <button onClick={() => handleIncrement(item._id)}>+</button>
                        <button onClick={() => handleDecrement(item._id)}>-</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Page;
