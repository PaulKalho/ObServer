import React from "react"
import PingGraph from "./PingGraph";

function Item ({data, onClickDetails}) {
  //Prop Data:
  // {
  //      ServerName:
  //      ipAdress:
  //      option:
  // }

  return (
    <div className="grid grid-cols-1 grid-rows-3 p-5 w-[380px] h-96 border-2 border-white rounded-lg justify-center items-center">
        <div className="ueberscr self-start font-bold">{data.serverName} | {data.ipAdress}</div>
        <div className="bild"><PingGraph/></div>
        <div className="relative self-end">
          <button className="w-full bg-cyan-600 p-2 rounded-lg duration-100 hover:bg-cyan-800" onClick={onClickDetails}>Details</button>
        </div>
    </div>
  )
};

export default Item;
