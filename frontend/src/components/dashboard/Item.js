import React from "react"

function Item (data) {
  console.log(data.data.servername);
  //Prop Data:
  // {
  //      ServerName:
  //      ipAdress:
  //      option:
  // }
  return (
    <div className="grid grid-cols-1 grid-rows-3 p-5 h-60 w-1/4 border-2 border-white rounded-lg justify-center items-center">
        <div className="ueberscr">{data.data.serverName}</div>
        <div className="bild">{data.data.ipAdress}</div>
        <div className="relative self-end">{data.data.option}</div>
    </div>
  )
};

export default Item;
