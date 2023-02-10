import React from "react"
import {BsX} from "react-icons/bs"

function PopUpAddServer ({addServer, onClick}) {

    let serverData = {
        servername: "",
        ipAdress: "",
        option: "",
    }

    let initialServerData = Object.freeze({
        servername: "",
        ipAdress: "",
        option: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(serverData);
    }

    return (
        <div className="bg-white absolute rounded-md left-1/2 transform -translate-x-1/2  p-5 text-black w-1/2">
            <div className="topBar mb-4 left-0 hover:cursor-pointer static" onClick={onClick}><BsX size={35}/></div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="servername" id="name" placeholder="Servername" className="rounded-lg border-2 p-1 mb-4 w-full" onChange={e => serverData.servername = e.target.value}></input><br/>
                <input type="text" name="ipAdress" id="name" placeholder="IP-Adresse" className="rounded-lg border-2 p-1 mb-4 w-full" onChange={e => serverData.ipAdress = e.target.value}></input><br />
                <select className="rounded-lg border-2 p-1 mb-4 w-full" onChange={e => serverData.option = e.target.value}>
                    <option value="ping">Ping</option>
                </select><br/>
                <button type="submit" className="bg-blue-200 p-4 rounded-md w-full">Hinzufügen</button>
            </form>
        </div>
    )
};

export default PopUpAddServer;
