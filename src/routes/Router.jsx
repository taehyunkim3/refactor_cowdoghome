import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import { MainPage } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="/house/:houseId" element={<h1>HouseDetail</h1>} />
        {/* <Route
          path="/house/post"
          element={<ProtectedRoute element={<h1>HousePost</h1>} />}
        /> */}
        <Route path="/item/:itemId" element={<h1>ItemDetail</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
