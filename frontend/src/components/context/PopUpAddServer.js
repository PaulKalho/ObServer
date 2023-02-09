import React from "react"
import {BsX} from "react-icons/bs"

function PopUpAddServer ({onClick}) {
  return (
    <div className="bg-white h-100 w-500 absoluteleft-1/2 transform -translate-x-1/2  p-5 text-black">
        <div className="topBar mb-4 left-0 hover:cursor-pointer static" onClick={onClick}><BsX size={35}/></div>
        <form>
            <input type="text" name="servername" id="name" placeholder="Servername" className="rounded-lg border-2 p-1 mb-4 w-full"></input><br/>
            <input type="text" name="servername" id="name" placeholder="IP-Adresse" className="rounded-lg border-2 p-1 mb-4 w-full"></input><br />
            <select className="rounded-lg border-2 p-1 mb-4 w-full">
                <option>Ping</option>
            </select><br/>
            <button type="submit" className="bg-blue-200 p-4 rounded-md w-full">Hinzufügen</button>
        </form>
    </div>
  )
};

export default PopUpAddServer;
