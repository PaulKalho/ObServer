import React, { useState, useEffect } from "react"
import PopUp from "../components/context/PopUp";
import PopUpDetailsServer from "../components/context/PopUpDetailsServer";
import Item from "../components/dashboard/Item";
import m_Servers from "../models/m_Servers";
import AddServerContent from "../components/context/AddServerContent";
import AddItemContent from "../components/dashboard/AddItem";

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
      arr.push(
        <Item key={element.id} data={element} onClickDetails={handlePopupDetails} />
      )
    });
    return arr;
  }

  return (
    <div>
        <div className="grid-area flex gap-4 flex-wrap px-10 mt-4">
            {renderServers()}
            <AddItemContent onClick={handlePopupAdd} />
            <div className={`wrapper duration-100 ${isPopupAdd ? "" : "hidden"}`}>
              <PopUp onClick={handlePopupAdd}>
                <AddServerContent Servers={Servers} addServer={addServer}/>
              </PopUp>
            </div>
            <div className={`wrapper duration-100 ${isPopupDetails ? "" : "hidden"}`}>
              <PopUp onClick={handlePopupDetails}>
                <PopUpDetailsServer />
              </PopUp>
            </div>

        </div>
    </div>
  )
};

export default Dashboard;
