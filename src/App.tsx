import { Navigate, Route, Routes } from "react-router";
import { AdminDashbord } from "./pages/Admin/AdminDashboard";
import { Blog } from "./pages/Blog/Blog";
import { Layout } from "./components/Layout/Layout";
import { Shop } from "./pages/Shop/Shop";

import "antd/dist/antd.css";
import { useStore } from "./store/store";

function App() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Navigate to="blog" />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          {isLoggedIn && <Route path="dashboard" element={<AdminDashbord />} />}
        </Route>
      </Routes>
    </>
  );
}

export default App;
