import React from 'react'
import './Filter.css'

const Sort = ({setSort}) => {
    const options = ["Featured","Price: High to Low","Rating: High to Low","Price: Low to High","Rating: Low to High"]
    return (
      <form>
        <label>Sort:</label>
        <select className='filter' onChange={(e) => setSort(e.target.value)}>
          {options.map((option)=><option>{option}</option>)}
        </select>
      </form>
    )
}


export default Sort