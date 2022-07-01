import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React from "react";

interface IProps {
  items: number;
  totalPrice: number;
  totalWeight: number;
}
const DropdownMenu = (props: IProps) => {
  const { items, totalPrice, totalWeight } = props;

  const menu = (
    <Menu
      items={[
        {
          label: `Total items is: ${items}`,
          key: "0",
        },
        {
          label: `Total price is:${totalPrice}`,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: `Total weight is:${totalWeight}`,
          key: "3",
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          See your basket
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
