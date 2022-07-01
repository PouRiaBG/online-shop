import { ProductList } from "../../components/ProductList/ProductList";
import styles from "./shop.module.css";
import { SortMenu } from "../../components/SortMenu/SortMenu";

const Shop = () => {
  return (
    <div className={styles.container}>
      <SortMenu />
      <ProductList />;
    </div>
  );
};
export { Shop };
