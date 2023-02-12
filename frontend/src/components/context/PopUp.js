import React from "react"
import {BsX} from "react-icons/bs"


function PopUp (props) {
  return (
    <div className="bg-white fixed rounded-md left-1/2 transform top-1/4 -translate-x-1/2  p-5 text-black w-1/2">
        <div className="topBar mb-4 left-0 hover:cursor-pointer static"><BsX size={35} onClick={props.onClick}/></div>
        {props.children}
    </div>
  )
};

export default PopUp;
