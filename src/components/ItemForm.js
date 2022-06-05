import React from 'react'
import { v4 as uuid } from 'uuid'

function ItemForm(props) {
  const newItem = {}

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={props.onItemChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={props.onItemCatChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={props.onItemFormSubmit}>
        Add to List
      </button>
    </form>
  )
}

export default ItemForm
