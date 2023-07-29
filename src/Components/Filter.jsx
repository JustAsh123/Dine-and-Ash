import React from 'react'
import './Filter.css'

const Filter = ({setFilter}) => {
    const options = ["all","coffee","deserts","beverages","milkshakes","snacks"]
  return (
    <form>
      <label>Filter:</label>
      <select className='filter' onChange={(e) => setFilter(e.target.value)}>
        {options.map((option)=><option>{option}</option>)}
      </select>
    </form>
  )
}

export default Filter