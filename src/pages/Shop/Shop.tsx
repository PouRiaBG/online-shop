import { ProductList } from "../../components/ProductList/ProductList";
import styles from "./shop.module.css";

const Shop = () => {
  return (
    <div className={styles.container}>
      <ProductList />;
    </div>
  );
};
export { Shop };
