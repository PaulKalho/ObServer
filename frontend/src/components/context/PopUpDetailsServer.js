import React from "react"
import {BsX} from "react-icons/bs"

function PopUpDetailsServer ({onClick}) {
  return (
    <div className="bg-white absolute rounded-md left-1/2 transform -translate-x-1/2  p-5 text-black w-1/2">
            <div className="topBar mb-4 left-0 hover:cursor-pointer static"><BsX size={35} onClick={onClick}/></div>
            <form action="">
                GOCKEL
            </form>
        </div>
  )
};

export default PopUpDetailsServer;
