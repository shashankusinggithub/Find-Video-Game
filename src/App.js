import './App.css';
import "./components/navbar"
import Navbar from "./components/navbar"
import Contact from './components/contact';
import Content from "./components/content"
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
