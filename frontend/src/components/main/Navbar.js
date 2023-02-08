import React from "react"

function Navbar () {
  return (
    <div className="bg-slate-900 w-100 h-16 rounded-b-md drop-shadow-lg flex items-center place-content-around">
        <div className="items flex flex-row text-white gap-x-7 uppercase justify-center">
            <p>Dashboard</p>
            <p>Settings</p>
        </div>
    </div>
  )
};

export default Navbar;
