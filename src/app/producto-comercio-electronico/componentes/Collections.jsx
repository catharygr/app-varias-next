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

const data = [
  {
    id: "1",
    company: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    name: "Fall Limited Edition Sneakers",
    price: 125,
    discont: 50,
  },
];

export default function Collection() {
  const { id, company, name, description, price, discont } = data[0]; // Destructura los datos del producto

  return (
    <div className={styles.container}>
      <div key={id} className={styles.producto}>
        <Image src={product1A} alt="" />
        <Image src={product1} alt="" />
        <Image src={product2A} alt="" />
        <Image src={product2} alt="" />
        <Image src={product3A} alt="" />
        <Image src={product3} alt="" />
        <Image src={product4A} alt="" />
        <Image src={product4} alt="" />
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
            <Minus className={styles.icons} size={15} />
            0
            <Plus className={styles.icons} size={15} />
          </button>
          <button className={styles.btnCarrito}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
