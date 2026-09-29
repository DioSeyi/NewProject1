import React from "react";
import FirstPageAPI from "../FirstPAPI.js";
import "../components/TpageAPI.css";
import { ImFacebook2 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";

const FpageAPI = () => {
  // IDs to show in order
  const idsToShow = [12, 13, 14, 15];

  return (
    <div className="renderCompoT">
      {idsToShow.map((id) => {
        const item = FirstPageAPI.find((product) => product.id === id);
    return (
      <div key={item.id} className="items_1">

        <div className="imageCover">

            <img className="imagSizingT" src={item.imageT} alt={item.Title} />
            
            <div className="divimageT">

              <span className="hova">
                <ImFacebook2 className="fav-ico"/>
                <p className="hover_Icons">Facebook</p>
              </span>
              
              <span className="hova">
                <AiFillTwitterCircle className="fav-ico"/>
                <p className="hover_Icons">Twitter</p>
              </span>

              <span className="hova">
                <FaPinterest className="fav-ico"/>
                <p className="hover_Icons">Pinterest</p>
              </span>
            </div>

            <div className="overlay"></div> 
        </div>
        
        <div style={{display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center'}} >
            <h3 className='title_0' >{item.Name}</h3>
            <p className='title_00'>{item.Title}</p>   
        </div>   
   
      </div>
        );
      })}
    </div>

  );

  
};

export default FpageAPI;
