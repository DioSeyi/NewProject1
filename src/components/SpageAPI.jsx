import React from "react";
import FirstPageAPI from "../FirstPAPI.js";
import "../components/SpageAPI.css";

const SpageAPI = () => {
  // IDs to show in order
  const idsToShow1 = [5,6,7];
  const idsToShow2 = [8,9,10];

  const renderRow = (idsToShow) => {

    return (
      <div className="renderCompo1">
        {idsToShow.map((id) => {
          const item = FirstPageAPI.find((item) => item.id === id);
      return  (
        <div key={item.id} className="items1">
          <div style={{ position: "relative", display: "inline-block"}}>
              <img src={item.image} alt={item.title} width="350"/>
              <div className="inbtwnlogo-div">
                <img className="inbtwnlogo" src={item.image1} alt={item.title} />
              </div>              
          </div>
            
            <h3 className='title1' >{item.title}</h3>
            <h4 className='title2' >{item.DetailsTitle}</h4>
            <h5 className='title3'>Donec nec justo eget felis facilisis ferme ntum.<br/>Aliquam portitor mauris sit amet orci. donec salim...</h5>

        </div>     
              );
        })}
      </div>
    );
};
    return (
        <>
          {renderRow(idsToShow1)}
          <div style={{marginTop:'35px'}}>
            {renderRow(idsToShow2)}
          </div>      
        </>
    );

};
export default SpageAPI;
