import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../../store/store";
import defaultImg from "../../assets/images/default.webp";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddProduct = () => {
  const products = useStore((state) => state.products);
  const addNewProduct = useStore((state) => state.addProductToShop);
  const user = useStore((state) => state.loggedInUser);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const onFinish = (values: any) => {
    const { name, price, weight, img } = values;
    addNewProduct({
      name: name,
      price: price,
      weight: weight,
      img: img ? img : defaultImg,
    });
    setIsModalVisible(false);
    navigate("/shop");
  };
  return (
    <>
      <h1>Add produts</h1>
      <h3>Total products in shop: {products.length}</h3>
      <Button
        disabled={!Boolean(user?.hasAccess)}
        onClick={toggleModal}
        type="primary"
      >
        Add new item
      </Button>
      <Modal
        title="Add product"
        visible={isModalVisible}
        onCancel={toggleModal}
        footer={false}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={"price"}
            label="Price"
            rules={[{ type: "number", required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={"weight"}
            label="Weight"
            rules={[{ type: "number", min: 0, max: 99, required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={"img"} label="Image url">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <p>if button is disabled you dont have permission to add new product</p>
    </>
  );
};

export { AddProduct };
