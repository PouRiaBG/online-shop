import { Button, Card, List, Modal } from "antd";
import { useState } from "react";
import { AddProduct } from "../../components/AddProduct/AddProduct";
import { useStore } from "../../store/store";
import styles from "./admin.module.css";
const AdminDashbord = () => {
  const users = useStore((state) => state.users);
  const user = useStore((state) => state.loggedInUser);
  const setUsers = useStore((state) => state.setPermissionUser);
  const addPermission = (name: string) => {
    const finalUsers = users.map((item) => {
      if (item.title === name) {
        item.hasAccess = true;
      }
      return item;
    });
    setUsers(finalUsers);
  };

  return (
    <div className={styles.container}>
      {user?.isAdmin ? (
        <section>
          <h1>Admin Dashboard</h1>
          <h3>You can acces to other user to add new product to shop </h3>
          <h3>
            After added permission please logout and login again with another
            account to test for add product
          </h3>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={users}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>
                  <h3>Can add product : {String(item.hasAccess)}</h3>
                  {!item.hasAccess ? (
                    <Button
                      type="primary"
                      onClick={() => addPermission(item.title)}
                    >
                      Add access
                    </Button>
                  ) : null}
                </Card>
              </List.Item>
            )}
          />
        </section>
      ) : null}

      <AddProduct />
    </div>
  );
};

export { AdminDashbord };
