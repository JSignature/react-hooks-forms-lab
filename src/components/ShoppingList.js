import React, { useState } from 'react'
import ItemForm from './ItemForm'
import Filter from './Filter'
import Item from './Item'
import { v4 as uuid } from 'uuid'

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filterValue, setFilterValue] = useState('')
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')
  const [newList, setNewList] = useState(items)

  function handleFilterValueChange(e) {
    setFilterValue(e.target.value)
  }

  function onItemChange(e) {
    setItemName(e.target.value)
    console.log(itemName)
  }

  function onItemCatChange(e) {
    setItemCategory(e.target.value)
    console.log(itemCategory)
  }

  function handleItemAdd(event) {
    console.log(event)
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }

    setNewList([...newList, newItem])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  const itemsToDisplay = newList
    .filter(item => {
      if (selectedCategory === 'All') return true

      return item.category === selectedCategory
    })
    .filter(item => item.name.includes(filterValue))

  return (
    <div className="ShoppingList">
      <ItemForm
        itemName={itemName}
        itemCategory={itemCategory}
        onItemFormSubmit={handleItemAdd}
        onItemChange={onItemChange}
        onItemCatChange={onItemCatChange}
      />
      <Filter
        onSearchChange={handleFilterValueChange}
        onCategoryChange={handleCategoryChange}
        search={filterValue}
      />
      <ul className="Items">
        {itemsToDisplay.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
