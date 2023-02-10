import React, { useState } from "react"
import PopUpAddServer from "../components/context/PopUpAddServer";
import AddNewItem from "../components/dashboard/AddNewItem";
import Item from "../components/dashboard/Item";

function Dashboard () {
  const[isPopup, setIsPopup] = useState(false);
  const[servers, setServers] = useState([]);

  function handlePopup() {
    setIsPopup(!isPopup);
  }

  async function loadServers() {
    //In this function all server-configs should be loaded into the Array
  }

  async function addServer(data) {
    //This function adds a Server-Config to the Array


    setServers([...servers, 'test']);
    
  }

  function renderServers() {

    let arr = [];
    
    servers.forEach(element => {
      arr.push(<Item /> )
    });
    return arr;
  }

  return (
    <div>
        <div className="Statistik">Statistik</div>
        <div className="grid-area flex gap-4">
            {renderServers()}
            <button onClick={addServer}>Hibzug</button>
            <AddNewItem onClick={handlePopup}/>
            { isPopup ? <PopUpAddServer onClick={handlePopup}/> : <div></div>}
        </div>
    </div>
  )
};

export default Dashboard;
