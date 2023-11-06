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
  const [imagen, setImagen] = useState(data.images[0].urlGrande);
  const { id, company, name, description, price, discont, images } = data;

  function handleImageGrande() {
    setImagen(images[0].urlGrande);
  }

  function handleImagePequena() {
    setImagen(images[0].urlPequena);
  }

  return (
    <div className={styles.container}>
      <div className={styles.producto}>
        <div className={styles.imagenGrande}>
          {images.map((image, id) => (
            <button
              key={image.id}
              onClick={handleImageGrande}
              className={styles.btnVolver}
            >
              <ChevronLeft
                className={styles.iconLeft}
                size={30}
              />
              <Image
                key={id}
                src={image.urlGrande}
                alt={image.alt}
              />
              <ChevronRight
                className={styles.iconRight}
                size={30}
              />
            </button>
          ))}
        </div>
        <div className={styles.imagenPequena}>
          {images.map((image, id) => (
            <button
              key={image.id}
              onClick={handleImagePequena}
              className={styles.btnVolver}
            >
              <Image
                key={id}
                src={image.urlPequena}
                alt={image.alt}
              />
            </button>
          ))}
        </div>
      </div>
      <div className={styles.contenido}>
        <h6>{company}</h6>
        <h1>{name}</h1>
        <h4>{description}</h4>
        <p>
          {`$${price}.00`}
          <span>{`${discont}%`}</span>
        </p>

        <div className={styles.cantidad}>
          <button className={styles.btn}>
            <Minus
              className={styles.icons}
              size={15}
            />
            0
            <Plus
              className={styles.icons}
              size={15}
            />
          </button>
          <button className={styles.btnCarrito}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
