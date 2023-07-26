import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";

import {
  LoginPage,
  ItemDetailPage,
  MainPage,
  SignUpPage,
  PostPage,
  HouseDetailPage,
  KakaoCallback,
} from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/house/post" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/house/:houseId" element={<HouseDetailPage />} />
        {/* <Route
          path="/house/post"
          element={<ProtectedRoute element={<h1>HousePost</h1>} />}
        /> */}
        <Route path="/item/:itemId" element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
