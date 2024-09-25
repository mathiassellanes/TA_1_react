import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to='/home' />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
