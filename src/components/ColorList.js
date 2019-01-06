import React from 'react'

const ColorList = ({ colors, toggleColor }) => {
  const list = colors.map((color, i) => {
    const style = { backgroundColor: color.selected ? color.value : 'white' }
    return <li
      className="list-group-item text-dark"
      key={ i }
      style={ style }
      onClick={ () => toggleColor(i) }>{ color.name }</li>
  })

  return <ul className="list-group">{ list }</ul>
}

export default ColorList
