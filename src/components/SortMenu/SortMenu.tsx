import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Typography, Space } from "antd";
import { useStore } from "../../store/store";

const SortMenu = () => {
  const products = useStore((state) => state.products);
  const setProduct = useStore((state) => state.setSortedprodcut);

  const sortByWeight = () => {
    console.log("clicked");
    const result = products
      .sort((a, b) => {
        return a.weight - b.weight;
      })
      .reverse();
    console.log({ result });
    setProduct(result);
  };

  const sortByPrice = () => {
    const result = products
      .sort((a, b) => {
        return a.price - b.price;
      })
      .reverse();
    setProduct(result);
  };
  const menu = (
    <Menu
      selectable
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          onClick: sortByWeight,
          label: "Weight",
        },
        {
          key: "2",
          onClick: sortByPrice,
          label: "Price",
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu}>
      <Typography.Link>
        <Space>
          Sort By
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export { SortMenu };
