import React from "react"
import {BsPlusCircle} from "react-icons/bs";

function AddItem ({onClick}) {
  return (
    <div className="grid grid-cols-1 grid-rows-2 p-5 w-[380px] h-96 border-2 border-white border-dashed rounded-lg text-center place-content-around justify-center items-center hover:cursor-pointer" onClick={onClick}>
      <BsPlusCircle className="m-auto" size={130}/>
      <div className="relative text-lg h-10">Add Server</div>
    </div>
  )
};

export default AddItem;
