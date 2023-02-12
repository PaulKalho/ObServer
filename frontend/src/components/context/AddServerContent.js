import React, { useState} from "react"
import {BsX} from "react-icons/bs"
import Select from "react-select"


function AddServerContent ({addServer, onClick, Servers}) {

    const selectOptions = [ 
        {
            value: "ping", 
            label: "Ping"
        } 
    ]

    let serverData = Servers.m_ServerObj;

    const handleSubmit = (e) => {
        e.preventDefault();
        //Axios call to backend, and add to array (call addServer function from Dashboard.js)
        addServer(serverData);
        onClick();
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="servername" id="name" placeholder="Servername" className="rounded-lg border-2 p-1 mb-4 w-full" onChange={e => serverData.serverName = e.target.value}></input><br/>
            <input type="text" name="ipAdress" id="name" placeholder="IP-Adresse" className="rounded-lg border-2 p-1 mb-4 w-full" onChange={e => serverData.ipAdress = e.target.value}></input><br />
            <Select options={selectOptions} className="mb-4" onChange={e => serverData.option = e.value}/>
            <button type="submit" className="bg-blue-200 p-4 rounded-md w-full">Hinzufügen</button>
        </form>
    )
};

export default AddServerContent;
