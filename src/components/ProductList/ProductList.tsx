import { Product } from "../Product/Product";
import styles from "./productList.module.css";
import img from "../../assets/images/main.png";
const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Tomato",
      price: 10,
      description: "image of tomato",
      img: img,
    },

    {
      id: 2,
      title: "potato",
      price: 10,
      description: "image of tomato",
      img: img,
    },

    {
      id: 3,
      title: "Apple",
      price: 10,
      description: "image of tomato",
      img: img,
    },

    {
      id: 1,
      title: "Orange",
      price: 10,
      description: "image of tomato",
      img: img,
    },

    {
      id: 1,
      title: "Tomato",
      price: 10,
      description: "image of tomato",
      img: img,
    },
  ];

  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (
          <Product
            image={img}
            key={product.title}
            id={product.id}
            price={product.price}
            title={product.title}
          />
        );
      })}
    </div>
  );
};

export { ProductList };
