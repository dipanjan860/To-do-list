import React, {useRef} from 'react'

function Input(props) {
  const inputBox = useRef();
  
  return (
    <div>
        <h1 className='text-blue-900 font-semibold text-xl text-center pt-3'>To-Do List</h1>
        <div className='p-3 flex justify-between'>
            <input type='text' placeholder='Enter Task...' className='p-3 outline-none border rounded-md border-slate-400 w-[85%]' ref={inputBox}/>
            <button className='cursor-pointer px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700' onClick={() => {
                props.handler(inputBox.current.value);
                inputBox.current.value = "";
            }}>Add</button>
        </div>
    </div>
  )
}

export default Input
