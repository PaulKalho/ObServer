import React from "react"
import PingGraph from "./PingGraph";

function Item (data) {
  console.log(data.data.servername);
  //Prop Data:
  // {
  //      ServerName:
  //      ipAdress:
  //      option:
  // }
  return (
    <div className="grid grid-cols-1 grid-rows-3 p-5 h-80 w-4/12 border-2 border-white rounded-lg justify-center items-center">
        <div className="ueberscr self-start">{data.data.serverName} | {data.data.ipAdress}</div>
        <div className="bild"><PingGraph/></div>
        <div className="relative self-end">{data.data.option}</div>
    </div>
  )
};

export default Item;
