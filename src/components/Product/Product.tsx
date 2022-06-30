import { Button, Card } from "antd";
import React from "react";
import styles from "./product.module.css";

interface IProps {
  title: string;
  id: number;
  price: number;
  image?: string;
}

const { Meta } = Card;
const Product: React.FC<IProps> = (props) => {
  const { title, id, price, image } = props;
  const addToCard = () => {
    console.log("Added");
  };
  return (
    <Card
      className={styles.card}
      cover={<img alt={title} src={image} />}
      actions={[
        <Button onClick={addToCard} type="default">
          Add to card
        </Button>,
      ]}
    >
      <Meta title={title} />
      <h3>Wieght : {}</h3>
      <h4>price : {price}</h4>
    </Card>
  );
};
export { Product };
