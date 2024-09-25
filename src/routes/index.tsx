import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Products from "./Products/Products";
import Product from "./Products/Id";
import Private from "./Private";
import Login from "./Login";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to='/home' />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Private />}>
          <Route path="products" element={<Products />} />
          <Route path="products/:id?" element={<Product />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
