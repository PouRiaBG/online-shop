import { DownOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Input,
  Menu,
  message,
  Modal,
  Space,
} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/store";

const Login = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const users = useStore((state) => state.users);
  const setIsLogin = useStore((state) => state.setIsLoggin);
  const setUser = useStore((state) => state.setLoggedInUser);
  const loggedInuser = useStore((state) => state.loggedInUser);
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onFinish = (values: any) => {
    const loggedUser = users.filter((item) => {
      return values.username === item.title;
    });
    if (loggedUser.length) {
      setIsLogin(true);
      console.log(loggedUser[0]);
      setUser(loggedUser[0]);
      toggleModal();
      navigate("/dashboard");
    } else {
      message.error("Your username is not correct");
    }
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          onClick: () => {
            setIsLogin(false);
            navigate("/shop");
          },
          label: "Logout",
        },
      ]}
    />
  );
  return (
    <>
      {!isLoggedIn ? (
        <Button onClick={toggleModal}>Login</Button>
      ) : (
        <Dropdown overlay={menu}>
          <Space>
            {loggedInuser?.title}
            <DownOutlined />
          </Space>
        </Dropdown>
      )}
      <Modal
        footer={false}
        onCancel={toggleModal}
        title="Login modal"
        visible={isModalVisible}
      >
        <Space>
          <Form name="basic" onFinish={onFinish} autoComplete="off">
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input type="text" placeholder="Enter your username" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Space>
        <Card title="Hint: list of users">
          <p> usernames : Admin, Pouria, Amir </p>
          <br />
          <p>please login with Admin and then you can manage other user</p>
        </Card>
      </Modal>
    </>
  );
};
export { Login };
