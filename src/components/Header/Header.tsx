import styles from "./header.module.css";
import img from "../../assets/logo.svg";
import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const Header = () => {
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
          count={30}
          size="default"
        >
          <ShoppingCartOutlined style={{ fontSize: "2rem" }} size={30} />
        </Badge>
      </section>
    </header>
  );
};

export { Header };
