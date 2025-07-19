import React from "react";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/movies" element={<Movies></Movies>} />
        <Route path="/series" element={<Series></Series>} />
        <Route path="*" element={<h1 className="text-5xl">404 Not Found</h1>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}
