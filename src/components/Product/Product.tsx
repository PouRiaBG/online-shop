import { Button, Card } from "antd";
import React from "react";
import { useStore } from "../../store/store";
import styles from "./product.module.css";

interface IProps {
  name: string;
  price: number;
  weight: number;
  img?: string;
}

const { Meta } = Card;
const Product: React.FC<IProps> = (props: IProps) => {
  const { name, weight, price, img } = props;
  const addProductToBasket = useStore((state) => state.addProdcut);

  const addToCard = () => {
    const product = { img: img, name: name, price: price, weight: weight };
    addProductToBasket(product);
  };
  return (
    <Card
      className={styles.card}
      cover={<img alt={name} src={img} />}
      actions={[
        <Button onClick={addToCard} type="default">
          Add to card
        </Button>,
      ]}
    >
      <Meta title={name} />
      <h3>Wieght : {weight}</h3>
      <h4>price : {price}</h4>
    </Card>
  );
};
export { Product };
