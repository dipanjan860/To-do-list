import React from 'react'
import Item from './Item'

function Todo(props) {
  const items = props.data.map((singleItem, index) => {
    return <Item key={index} id={index} item={singleItem} removeHandler={props.removeHandler}/>
  });
  
  return (
    <div className='p-3'>
      {items}
      {/* <Item/>
      <Item/> */}
    </div>
  )
}

export default Todo
