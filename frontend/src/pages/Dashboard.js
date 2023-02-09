import React from "react"
import AddNewItem from "../components/dashboard/AddNewItem";
import Item from "../components/dashboard/Item";

function Dashboard () {
  return (
    <div>
        <div className="Statistik">Statistik</div>
        <div className="grid-area flex gap-4">
            <Item />
            <AddNewItem />
        </div>
    </div>
  )
};

export default Dashboard;
