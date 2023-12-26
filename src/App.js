import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preloader from "./Pages/Preloader";
import "./styles/App.css";

const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Products = React.lazy(() => import("./Pages/Products"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const SingleProduct = React.lazy(() => import("./Pages/SingleProduct"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const LoginPage = React.lazy(() => import("./Pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./Pages/RegisterPage"));
const Error = React.lazy(() => import("./Pages/Error"));
const GoToTop = React.lazy(() => import("./components/GoToTop"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <BrowserRouter>
     <Suspense fallback={<Preloader />} >
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Zara-Беларусь" />} />
        <Route path="/about" element={<About title="Zara-О нас" />} />
        <Route path="/products" element={<Products title="Zara-Магазин" />} />
        <Route path="/contact" element={<Contact title="Zara/Форма обратной связи" />} />
        <Route path="/singleproduct/:id" element={<SingleProduct title="Zara" />} />
        <Route path="/cart" element={<Cart title="Zara-Корзина" />} />
        <Route path="/login" element={<LoginPage title="Zara-Авторизация" />} />
        <Route path="/register" element={<RegisterPage title="Zara-Регистрация" />} />
        <Route path="*" element={<Error title="Zara-Такой страницы нет" />} />
      </Routes>
      <GoToTop />
      <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
