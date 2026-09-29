import React from "react";
import FirstPageAPI from "../FirstPAPI.js";
import "../components/FTpageAPI.css";

const FpageAPI = () => {
  // IDs to show in order
  const idsToShow0 = [16, 18, 20];
  const idsToShow1 = [17,19];

  return (
    <div className="renderCompoFT">
      {idsToShow0.concat(idsToShow1).map((id) => {
        const item = FirstPageAPI.find((product) => product.id === id);
    return (
      <div key={item.id} className="items_2">

        <div className="imageCoverFT">

            <img className="imagSizingFT" src={item.imageT} alt={item.Title} />
        
        </div>
        {/* <div style={{display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center'}} > */}
            <h3 className='title_' >{item.Name}</h3>
        {/* </div>    */}
   
      </div>
        );
      })}
    </div>

  );

  
};

export default FpageAPI;
