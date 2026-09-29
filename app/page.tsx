"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "../lib/data/data";
import { Product } from "../lib/type/type";

export default function Home() {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="lux-container">
        <header className="lux-header">
          <div className="lux-logo">Botánica</div>
          <button
            className="lux-cart-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
          >
            Cart
            {cartCount > 0 && (
              <span className="lux-cart-badge">{cartCount}</span>
            )}
          </button>
        </header>

        <section className="lux-hero">
          <h1 className="lux-hero-title">Nature, refined.</h1>
          <p className="lux-hero-subtitle">
            Curated minimalist botanicals for the modern sanctuary. Elevate your
            space with our handpicked selection of premium foliage.
          </p>
        </section>

        <section className="lux-grid">
          {products.map((product) => (
            <div key={product.id} className="lux-card">
              <div className="lux-card-img-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="lux-card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="lux-card-info">
                <div>
                  <h3 className="lux-card-title">{product.name}</h3>
                  <span className="lux-card-price">${product.price}</span>
                </div>
                <button
                  className="lux-add-btn"
                  onClick={() => addToCart(product)}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`lux-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className={`lux-cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="lux-cart-header">
          <h2>Your Cart</h2>
          <button className="lux-close-btn" onClick={() => setIsCartOpen(false)}>
            &times;
          </button>
        </div>

        <div className="lux-cart-items">
          {cart.length === 0 ? (
            <p style={{ color: "var(--text-secondary)" }}>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="lux-cart-item">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={100}
                  className="lux-cart-item-img"
                />
                <div className="lux-cart-item-details">
                  <div>
                    <h4 className="lux-cart-item-title">{item.name}</h4>
                    <span className="lux-cart-item-price">
                      ${item.price} x {item.quantity}
                    </span>
                  </div>
                  <div className="lux-cart-item-actions">
                    <button
                      className="lux-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lux-cart-footer">
          <div className="lux-cart-total">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button
            className="lux-checkout-btn"
            onClick={() => alert("Checkout not implemented in demo")}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
