import './App.css';
import "./context/navbar"
import Navbar from "./context/navbar"
import Contact from './context/contact';
import Content from "./context/content"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Content/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>

  )
}
