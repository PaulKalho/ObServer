import React from "react"

function Item (data) {
  return (
    <div className="grid grid-cols-1 grid-rows-3 p-5 h-60 w-1/4 border-2 border-white rounded-lg justify-center items-center">
        <div className="ueberscr">Ueberscr</div>
        <div className="bild">Bild</div>
        <div className="relative self-end">Create New</div>
    </div>
  )
};

export default Item;
