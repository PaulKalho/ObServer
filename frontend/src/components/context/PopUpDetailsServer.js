import React from "react"

function PopUpDetailsServer ({onClick}) {
  return (
    <form action="">
                <input type="text" name="servername" id="name" placeholder="Servername" className="rounded-lg border-2 p-1 mb-4 w-full"></input><br/>
                <input type="text" name="ipAdress" id="name" placeholder="IP-Adresse" className="rounded-lg border-2 p-1 mb-4 w-full"></input><br />
                <button type="submit" className="bg-blue-200 p-4 rounded-md w-full">Hinzufügen</button>
    </form>
        
  )
};

export default PopUpDetailsServer;
