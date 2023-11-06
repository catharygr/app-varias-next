"use client";
import styles from "./collections.module.css";
import Image from "next/image";
import product1 from "../image/image-product-1-thumbnail.jpg";
import product1A from "../image/image-product-1.jpg";
import product2 from "../image/image-product-2-thumbnail.jpg";
import product2A from "../image/image-product-2.jpg";
import product3 from "../image/image-product-3-thumbnail.jpg";
import product3A from "../image/image-product-3.jpg";
import product4 from "../image/image-product-4-thumbnail.jpg";
import product4A from "../image/image-product-4.jpg";
import { Minus, Plus } from "react-feather";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const data = {
  company: "Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  name: "Fall Limited Edition Sneakers",
  price: 250,
  discont: 50,
  images: [
    {
      id: "1",
      urlGrande: product1A,
      urlPequena: product1,
      alt: "product1",
    },
    {
      id: "2",
      urlGrande: product2A,
      urlPequena: product2,
      alt: "product2",
    },
    {
      id: "3",
      urlGrande: product3A,
      urlPequena: product3,
      alt: "product3",
    },
    {
      id: "4",
      urlGrande: product4A,
      urlPequena: product4,
      alt: "product4",
    },
  ],
};

export default function Collection() {
  return (
    <>
      <div className="nav-right">
        <Image
          className="profile-image"
          src="images/image-avatar.png"
        />
        <div className="modal hidden">
          <div className="hidden-1">
            <h4>Cart</h4>
          </div>
          <div className="cart_box hidden-2">
            <div className="box-1">
              <img
                className="cart-box-image"
                src="images/image-product-1-thumbnail.jpg"
              />
              <div>
                <p className="box-1-p1">Fall Limited Edition Sneakers</p>
                <div className="cart_price">
                  <p className="cart_price_calc">$125.00 x </p>
                  <p className="cart_price_count">1</p>
                  <h5 className="cart_total_price">$250.00</h5>
                </div>
              </div>
              <Image
                className="delete"
                src="images/delete.png"
                alt="delete"
              />
            </div>
            <div className="checkout">checkout</div>
          </div>
        </div>
      </div>
      <div className="cart_logo_count">0</div>

      <div className="container">
        <div className="container-1">
          <Image
            className="main-image"
            src="images/image-product-1.jpg"
          />
          <ul className="bottom-images">
            <li className="image-list">
              <Image
                className="bottom-img"
                src="images/image-product-1-thumbnail.jpg"
              />
            </li>
            <li className="image-list">
              <Image
                className="bottom-img"
                src="images/image-product-2-thumbnail.jpg"
              />
            </li>
            <li className="image-list">
              <Image
                className="bottom-img"
                src="images/image-product-3-thumbnail.jpg"
              />
            </li>
            <li>
              <img
                className="bottom-img"
                src="images/image-product-4-thumbnail.jpg"
              />
            </li>
          </ul>
        </div>
        <div className="container-2">
          <h3 className="company">SNEAKER COMPANY</h3>
          <h1 className="edition">Fall Limited Edition Sneakers</h1>
          <p className="shoe-details">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <h3 className="disc-price">$125.00</h3>
            <h4 className="offer">50%</h4>
          </div>
          <h4 className="real-price">$250.00</h4>
          <div className="cart">
            <div
              className="cart-count"
              width="12"
              height="4"
            >
              <h5 className="cart_count">0</h5>
            </div>
            <div className="add-cart">
              <h4 className="add-to-cart">Add to cart</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Shadan Rashid</a>.
      </div>
    </>
  );
}
