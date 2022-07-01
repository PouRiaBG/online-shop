import styles from "./header.module.css";
import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useStore } from "../../store/store";
import DropdownMenu from "../Dropdown/Dropdown";
const Header = () => {
  const products = useStore((state) => state.productsBasket);

  const totalPrice = products.reduce((total, currentValue) => {
    return total + currentValue.price;
  }, 0);

  const totalWeight = products.reduce((total, currentValue) => {
    return total + currentValue.weight;
  }, 0);
  return (
    <header className={styles.container}>
      <section className={styles.left}>
        <p>Organicfy</p>
      </section>
      <section className={styles.main}>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? { borderBottom: "2px solid green", color: "black" }
              : { color: "#07070757" };
          }}
          className={styles.link}
          to="blog"
        >
          Blog
        </NavLink>

        <NavLink
          className={styles.link}
          style={({ isActive }) => {
            return isActive
              ? { borderBottom: "2px solid green", color: "black" }
              : { color: "#07070757" };
          }}
          to="shop"
        >
          Shop
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return isActive
              ? { borderBottom: "2px solid green", color: "black" }
              : { color: "#07070757" };
          }}
          className={styles.link}
          to="admin"
        >
          Admin
        </NavLink>
      </section>
      <section className={styles.right}>
        <Badge
          className={styles.badge}
          showZero
          color="green"
          count={products.length}
          size="default"
        >
          {products.length === 0 ? null : (
            <DropdownMenu
              items={products.length}
              totalPrice={totalPrice}
              totalWeight={totalWeight}
            />
          )}
          <ShoppingCartOutlined style={{ fontSize: "2rem" }} size={30} />
        </Badge>
      </section>
    </header>
  );
};

export { Header };
