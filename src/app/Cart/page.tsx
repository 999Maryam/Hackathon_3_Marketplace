"use client";

import { Product } from "../../../types/product";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems([...getCartItems()]);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems([...getCartItems()]);
        Swal.fire("Removed!", "Item has been removed from your cart.", "success");
      }
    });
  };

  const handleIncrement = (id: string) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, inventory: item.inventory + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleDecrement = (id: string) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id && item.inventory > 1
        ? { ...item, inventory: item.inventory - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="w-full max-w-4xl space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-20 h-20 object-cover rounded-lg"
                    alt="product image"
                    width={500}
                    height={500}
                  />
                )}
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                      disabled={item.inventory <= 1}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="mt-4 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 w-full max-w-4xl bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${cartItems.reduce((total, item) => total + item.price * item.inventory, 0).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => Swal.fire("Success!", "Your order has been processed!", "success")}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
