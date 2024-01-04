import React from 'react'
import { BsTrash } from "react-icons/bs";

function Item(props) {
  return (
    <div className='my-2 mr-3 py-2 px-3 rounded bg-blue-500 flex justify-between text-white items-center w-full hover:bg-blue-600 hover:scale-[1.02] ease-in-out duration-300'>
      <div>{props.item}</div>
      <div onClick={() => props.removeHandler(props.id)}>
        <BsTrash className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Item
