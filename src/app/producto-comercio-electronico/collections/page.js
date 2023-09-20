'"use client";';
import styles from "./collections.module.css";

export default function Collections() {
  return (
    <div className={styles.container}>
      <h3>Sneaker Company</h3>
      <h2>Fall Limited Edition Sneakers</h2>
      {data.map(({ id, image, name, price, slug }) => (
        <div key={id} className={styles.producto}>
          {/* <img src={image} alt={name} /> */}
          <h3>{name}</h3>
          <p>${price}</p>
          <a href={`/collections/${slug}`}>Ver producto</a>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    id: "1",
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
