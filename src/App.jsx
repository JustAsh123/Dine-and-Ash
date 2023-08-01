import Navbar from "./Components/Navbar"
import './All.css'
import { useState, useEffect } from "react"
import ProductBox from "./Components/ProductBox";
import Filter from "./Components/Filter";
import Sort from "./Components/Sort";
import Register from './Components/Register'
import Login from "./Components/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [products,setProducts] = useState([]);
  const [filter,setFilter] = useState("all");
  const [sort,setSort] = useState("Featured");

  useEffect(() => {
    fetch("https://cafe-no-backend.vercel.app/data")
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.error("Error fetching data"))
  },[])
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>
          <Filter setFilter={setFilter}/>
          <Sort setSort={setSort}/>
          <ProductBox products = {products} filter={filter} sort={sort}/>
          </div>}></Route>
        <Route path="/register" element={
          <div>
            <Register />
          </div>
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
