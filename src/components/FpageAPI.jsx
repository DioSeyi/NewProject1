import React from "react";
import FirstPageAPI from "../FirstPAPI.js";
import "../components/FpageAPI.css";
import { LuArrowRightLeft } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";
import { GrFavorite } from "react-icons/gr";

const FpageAPI = () => {
  // IDs to show in order
  const idsToShow = [1, 2, 3, 4];

  return (
    <div className="renderCompo">
      {idsToShow.map((id) => {
        const item = FirstPageAPI.find((product) => product.id === id);
    return (
      <div key={item.id} className="items">
        <div style={{overflow: "hidden", position: "relative", display: "inline-block" }}>
          {item.available && (
            <p style={{backgroundColor: item.available === "Hot" ? "#3FE0D0" : "#c22c2c"}} className="itemAvail">
              {item.available}
            </p> )}
            <img className="imagSizing" src={item.image} alt={item.title}  />
            <div className="divimage">
              <GrFavorite className="fav-icon"/>
              <PiShoppingCart className="fav-icon"/>
              <LuArrowRightLeft className="fav-icon"/>
            </div>
          </div>

            <h3 className='title' >{item.title}</h3>
            {(item.OldPrice)? 
            <div className='pname'>           
              <p className='pname1'>{item.OldPrice}</p>
              <p className='pname2'>{item.Price}</p>
            </div>:
            <div className='pname'>
              <p className=''>{item.Price}</p>
            </div>}            
      </div>

        );
      })}
    </div>



  );
};

export default FpageAPI;
