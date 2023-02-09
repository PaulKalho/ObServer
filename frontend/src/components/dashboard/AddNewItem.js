import React from "react"
import {BsPlusCircle} from "react-icons/bs";

function AddNewItem ({onClick}) {
  return (
    <div onClick={onClick} className="grid grid-cols-1 grid-rows-auto-1 p-3 h-60 w-1/4 border-dashed border-2 border-white place-content-around rounded-lg text-center hover:cursor-pointer">
      <BsPlusCircle className="m-auto" size={130}/>
      <div className="relative text-lg h-10">Add Server</div>
    </div>
  )
};

export default AddNewItem;
