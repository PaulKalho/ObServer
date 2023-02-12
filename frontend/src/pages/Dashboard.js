import React, { useState, useEffect } from "react"
import PopUpAddServer from "../components/context/PopUpAddServer";
import PopUpDetailsServer from "../components/context/PopUpDetailsServer";
import AddNewItem from "../components/dashboard/AddNewItem";
import Item from "../components/dashboard/Item";
import m_Servers from "../models/m_Servers";

function Dashboard () {
  const Servers = new m_Servers();
  const[isPopupAdd, setIsPopupAdd] = useState(false);
  const[isPopupDetails, setIsPopupDetails] = useState(false);
  const[servers, setServers] = useState([]);
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    async function initialize() {
      try {
        setLoading(true);
        await Servers.m_Server_FindAll();
        setServers(Servers.m_Server_List);
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    initialize();
  }, [])
  

  function handlePopupAdd() {
    setIsPopupAdd(!isPopupAdd);
  }

  function handlePopupDetails() {
    setIsPopupDetails(!isPopupDetails);
  }

  async function addServer(data) {
    //This function adds a Server-Config to the Array
    await Servers.m_Server_insert(data);

    setServers([...servers, data]);
    console.log(servers);
  }

  function renderServers() {

    let arr = [];
    // console.log(servers)
    
    servers.forEach(element => {
      arr.push(<Item key={element} data={element} onClickDetails={handlePopupDetails}/> )
    });
    return arr;
  }

  return (
    <div>
        <div className="grid-area flex gap-4 flex-wrap px-10 mt-4">
            {renderServers()}
            <AddNewItem onClick={handlePopupAdd}/>
            <div className={`wrapper duration-100 ${isPopupAdd ? "" : "hidden"}`}>
              <PopUpAddServer Servers={Servers} onClick={handlePopupAdd} addServer={addServer} />
            </div>
            <div className={`wrapper duration-100 ${isPopupDetails ? "" : "hidden"}`}>
              <PopUpDetailsServer onClick={handlePopupDetails}/>
            </div>
        </div>
    </div>
  )
};

export default Dashboard;
