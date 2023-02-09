import React, { useState } from "react"
import PopUpAddServer from "../components/context/PopUpAddServer";
import AddNewItem from "../components/dashboard/AddNewItem";
import Item from "../components/dashboard/Item";

function Dashboard () {
  const[isPopup, setIsPopup] = useState(false);

  function handlePopup() {
    setIsPopup(!isPopup);
  }

  return (
    <div>
        <div className="Statistik">Statistik</div>
        <div className="grid-area flex gap-4">
            <Item />
            <AddNewItem onClick={handlePopup}/>
            { isPopup ? <PopUpAddServer  onClick={handlePopup}/> : <div></div>}
        </div>
    </div>
  )
};

export default Dashboard;
