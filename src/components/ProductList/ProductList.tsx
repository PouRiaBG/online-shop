import { Product } from "../Product/Product";
import styles from "./productList.module.css";
import { useStore } from "../../store/store";
const ProductList = () => {
  const products = useStore((state) => state.products);

  return (
    <div className={styles.container}>
      {products.map((product) => {
        console.log(product.price);
        return (
          <Product
            price={product.price}
            img={product.img}
            key={product.name}
            weight={product.weight}
            name={product.name}
          />
        );
      })}
    </div>
  );
};

export { ProductList };
