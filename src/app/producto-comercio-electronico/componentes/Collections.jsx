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

const data = [
  {
    id: "1",
    company: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    name: "Fall Limited Edition Sneakers",
    price: 125,
    discont: 50,
    slug: "fall-limited-edition-sneakers",
  },
];

export default function Collection() {
  const { id, company, name, price, discont, slug } = data[0]; // Destructura los datos del producto

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
        <h3>{company}</h3>
        <h2>{name}</h2>
        <h4>{name}</h4>{" "}
        {/* No está claro qué debería mostrarse aquí; posiblemente debería ser el nombre del producto nuevamente */}
        <p>{price}</p>
        <p>{discont}</p>
        <p>{slug}</p>
      </div>
    </div>
  );
}

// import styles from "./collections.module.css";
// import Image from "next/image";
// import product1 from "../image/image-product-1-thumbnail.jpg";
// import product1A from "../image/image-product-1.jpg";
// import product2 from "../image/image-product-2-thumbnail.jpg";
// import product2A from "../image/image-product-2.jpg";
// import product3 from "../image/image-product-3-thumbnail.jpg";
// import product3A from "../image/image-product-3.jpg";
// import product4 from "../image/image-product-4-thumbnail.jpg";
// import product4A from "../image/image-product-4.jpg";
// import iconPlus from "../image/icon-plus.svg";
// import iconMinus from "../image/icon-minus.svg";
// import iconClose from "../image/icon-close.svg";
// import iconDelete from "../image/icon-delete.svg";
// import iconMenu from "../image/icon-menu.svg";

// const data = [
//   {
//     id: "1",
//     company: "Sneaker Company",
//     description:
//       "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
//     name: "Fall Limited Edition Sneakers",
//     price: 125,
//     discont: 50,
//     slug: "fall-limited-edition-sneakers",
//   },
// ];

// export default function Collection() {
//   return (
//     <div className={styles.container}>
//       {data.map(({ id, name, price, slug }) => (
//         <div key={id} className={styles.producto}>
//           <Image src={product1A} alt="" />
//           <Image src={product1} alt="" />
//           <Image src={product2A} alt="" />
//           <Image src={product2} alt="" />
//           <Image src={product3A} alt="" />
//           <Image src={product3} alt="" />
//           <Image src={product4A} alt="" />
//           <Image src={product4} alt="" />
//         </div>
//       ))}
//       <div className={styles.contenido}>
//         <h3>{data[0].company}</h3>
//         <h2>{data[0].name}</h2>
//         <h4>{name}</h4>
//         <p>{price}</p>
//         <p>{discont}</p>
//         <p>{slug}</p>
//         <Image src={iconPlus} alt="" />
//         <Image src={iconMinus} alt="" />
//         <Image src={iconClose} alt="" />
//         <Image src={iconDelete} alt="" />
//         <Image src={iconMenu} alt="" />
//       </div>
//     </div>
//   );
// }
