import React from "react"
import { Link, } from "react-router-dom";

function Navbar () {
  return (
    <div className="bg-slate-900 w-100 h-16 rounded-b-md drop-shadow-lg flex items-center place-content-around">
        <div className="items flex flex-row text-white gap-x-7 uppercase justify-center">
            <Link to="/">Dashboard</Link>
            <Link to="/settings">Settings</Link>
        </div>
    </div>
  )
};

export default Navbar;
