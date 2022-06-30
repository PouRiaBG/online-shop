import { Link } from "react-router-dom";
import styles from "./blog.module.css";
import imgSrc from "../../assets/images/main.png";

const Blog = () => {
  return (
    <main className={styles.container}>
      <aside>
        <h1>Healthy food to live a healthiere life in the future</h1>
        <p>
          A healthy diet rich in fruits, vegetables, whole grains and
          <br />
          low-fat dairy can help to reduce your risk of heart disease by
          maintaining blood pressure and cholesterol levels.
        </p>
        <Link to="/shop">
          <button>Go to Shop</button>
        </Link>
      </aside>
      <section>
        <img src={imgSrc} alt="dish" />
      </section>
    </main>
  );
};
export { Blog };
