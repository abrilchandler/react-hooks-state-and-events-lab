import React, {useState} from "react";
import Item from "./Item";



function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleAdd(e) {
    setSelectedCategory(e.target.value)
  }

  const ItemToFilter = items.filter((value) => {
    if(selectedCategory === "All"){
      return true
    } else {
      return value.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleAdd}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {ItemToFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
