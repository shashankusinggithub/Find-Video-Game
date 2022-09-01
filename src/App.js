
import './App.css';
import "./context/navbar"

import Navbar from "./context/navbar"

import Content from "./context/content"

export default function App() {
  return (
    <div className="bg flex flex-col">
      <Navbar/>
      <Content/>

     
    </div>
  )
}
