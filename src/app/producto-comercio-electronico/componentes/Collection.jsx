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
import iconPlus from "../image/icon-plus.svg";
import iconMinus from "../image/icon-minus.svg";
import iconClose from "../image/icon-close.svg";
import iconDelete from "../image/icon-delete.svg";
import iconMenu from "../image/icon-menu.svg";

export default function Collections() {
  return (
    <div className={styles.container}>
      {data.map(({ id, name, price, slug }) => (
        <div key={id} className={styles.producto}>
          <Image src={product1A} alt={name} />
          <Image src={product1} alt={name} />
          <Image src={product2A} alt={name} />
          <Image src={product2} alt={name} />
          <Image src={product3A} alt={name} />
          <Image src={product3} alt={name} />
          <Image src={product4A} alt={name} />
          <Image src={product4} alt={name} />

          <h3>Sneaker Company</h3>
          <h2>Fall Limited Edition Sneakers</h2>
          <h3>{name}</h3>
          <p>${price}</p>
          <p>{slug}</p>
          <Image src={iconPlus} alt={name} />
          <Image src={iconMinus} alt={name} />
          <Image src={iconClose} alt={name} />
          <Image src={iconDelete} alt={name} />
          <Image src={iconMenu} alt={name} />
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    id: "1",
    company: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    image: "/image/product-1.jpg",
    image: "/image/product-2.jpg",
    image: "/image/product-3.jpg",
    image: "/image/product-4.jpg",
    name: "Fall Limited Edition Sneakers",
    price: 125,
    slug: "fall-limited-edition-sneakers",
  },
];
