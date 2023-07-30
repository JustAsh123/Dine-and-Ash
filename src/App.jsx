import Navbar from "./Components/Navbar"
import './All.css'
import { useState, useEffect } from "react"
import ProductBox from "./Components/ProductBox";
import Filter from "./Components/Filter";
import Sort from "./Components/Sort";

function App() {

  const [products,setProducts] = useState([]);
  const [filter,setFilter] = useState("all");
  const [sort,setSort] = useState("Featured");

  useEffect(() => {
    fetch("https://fetchdataphp.infinityfreeapp.com/fetch_menu.php")
    .then((response)=>response.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.error("Error fetching data"))
  },[])
  
  return (
    <div>
      <Navbar />
      <Filter setFilter={setFilter}/>
      <Sort setSort={setSort}/>
      <ProductBox products = {products} filter={filter} sort={sort}/>
    </div>
  )
}

export default App
