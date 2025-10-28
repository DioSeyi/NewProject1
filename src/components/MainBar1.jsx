// import React from 'react'
// import { Link } from 'react-router-dom';
// // import '../components/MainBar.css';
// import '../components/MainBar1.css';
// import { LiaSearchSolid } from "react-icons/lia";
// import { RiShoppingCart2Line } from "react-icons/ri";
// import image2 from '../assets/down.png';
// import {useState} from 'react'
// import { MdChevronRight } from "react-icons/md";
// import { FaChevronDown } from "react-icons/fa";
// import Hamburger from 'hamburger-react'

// const MainBar1 = () => {
//   // const []
//   const [isOpen, setOpen] = useState(false)

//   return (
//    <>
//       <div className="MainBar1">
//        <div style={{display:'flex',flexDirection:'row'}}>
//           <Link className="navlink" to="/"><span  className='farmie-green1'>FAR</span>MIE</Link>

//           <ul className="navlinkss">
//             <Link className="navlink11" to="/Home">HOME</Link>
//             <Link className="navlink1" to="/#">ABOUT</Link>

//             <div className="navlinks">
//               <div className='down'>
//                 <Link className="navlink1" to="/#">
//                   PAGES <FaChevronDown  size={17}  style={{ marginTop: '5px',paddingLeft: '5px' }}/>
//                 </Link>
//               </div>

//               <div className="dropdown">
//                 <a className= 'dp1' href="#">Home</a>
//                 <a className= 'dp1' href="#">About Us</a>
//                 <a className= 'dp1' href="#">Farming Practice</a>

//               <div className="navlinks1">
//                 <div className= 'down1'>
//                   <a className= 'dp11' href="#">Shop <MdChevronRight size={20} className='arrow'/></a>
//                 </div>

//                   <div className="dropdown1">
//                     <a className= 'dp1' href="#">Our Products</a>
//                     <a className= 'dp1' href="#">Shop</a>
//                   </div>
//               </div>

//               <div className="navlinks1">
//                 <div className= 'down1'>
//                   <a className= 'dp11' href="#">News <MdChevronRight size={19} className='arrow'/></a>
//                 </div>

//                   <div className="dropdown2">
//                     <a className= 'dp1' href="#">News</a>
//                     <a className= 'dp1' href="#">News Details</a>
//                   </div>
//               </div>

//                 <a className= 'dp1' href="#">Contact</a>
//               </div>
//             </div>

//             <Link className="navlink1">OUR PRODUCT</Link>
//             <Link className="navlink1">FARMING PRACTICE</Link>
//             <Link className="navlink1">NEWS</Link>
//             <Link className="navlink1">CONTACT</Link>
//           </ul>

//           <div className='nav-icons'>
//             <LiaSearchSolid size={18}/>
//             <RiShoppingCart2Line size={18}/>
//           </div>

//           {/* <div className="cartcontain">
//             <img onClick = {()=> navigate('/Cart')} className = "clogo2" src= {clogo1} alt="CLogo" />
//             <p style={{color:'white'}}>{cartdata.length}</p>
//           </div> */}
//       </div>

//       <div className='ham'>
//         <Hamburger toggled={isOpen} toggle={setOpen} />
//       </div>
//     </div>

//     <div className= {isOpen === false ? 'off':'mobile'}>
//       <div className='ham1'>
//         <Hamburger toggled={isOpen} toggle={setOpen} />
//       </div>
//       <h4>Hello</h4>
//       {/* <Link className="navlink" to="/"><span  className='farmie-green1'>FAR</span>MIE</Link> */}
//     </div>
//   </>
//   )
// }

// export default MainBar1

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/MainBar1.css";
import { LiaSearchSolid } from "react-icons/lia";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdChevronRight } from "react-icons/md";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import Hamburger from "hamburger-react";

const MainBar1 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="MainBar1">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link className="navlink" to="/">
            <span className="farmie-green1">FAR</span>MIE
          </Link>

          {/* Desktop Navigation */}
          <ul className="navlinkss">
            <Link className="navlink11" to="/Home">
              HOME
            </Link>
            <Link className="navlink1" to="/#">
              ABOUT
            </Link>

            <div className="navlinks">
              <div className="down">
                <Link className="navlink1" to="/#">
                  PAGES{" "}
                  <FaChevronDown
                    size={17}
                    style={{ marginTop: "5px", paddingLeft: "5px" }}
                  />
                </Link>
              </div>

              <div className="dropdown">
                <a className="dp1" href="#">
                  Home
                </a>
                <a className="dp1" href="#">
                  About Us
                </a>
                <a className="dp1" href="#">
                  Farming Practice
                </a>

                <div className="navlinks1">
                  <div className="down1">
                    <a className="dp11" href="#">
                      Shop <MdChevronRight size={20} className="arrow" />
                    </a>
                  </div>
                  <div className="dropdown1">
                    <a className="dp1" href="#">
                      Our Products
                    </a>
                    <a className="dp1" href="#">
                      Shop
                    </a>
                  </div>
                </div>

                <div className="navlinks1">
                  <div className="down1">
                    <a className="dp11" href="#">
                      News <MdChevronRight size={19} className="arrow" />
                    </a>
                  </div>
                  <div className="dropdown2">
                    <a className="dp1" href="#">
                      News
                    </a>
                    <a className="dp1" href="#">
                      News Details
                    </a>
                  </div>
                </div>

                <a className="dp1" href="#">
                  Contact
                </a>
              </div>
            </div>

            <Link className="navlink1">OUR PRODUCT</Link>
            <Link className="navlink1">FARMING PRACTICE</Link>
            <Link className="navlink1">NEWS</Link>
            <Link className="navlink1">CONTACT</Link>
          </ul>

          {/* Desktop Icons */}
          <div className="nav-icons">
            <LiaSearchSolid size={18} />
            <RiShoppingCart2Line size={18} />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="ham">
          {!isOpen && (
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="black"
              size={24}
              direction="right"
              rounded
              duration={0.5}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Overlay (80% width) */}
      <div className={isOpen ? "mobile active" : "mobile"}>
        <div className="ham1">
          <FaTimes
            size={26}
            color="white"
            className="close-icon"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="mobile-links">
          <Link to="/Home" onClick={() => setOpen(false)}>
            HOME
          </Link>
          <Link to="/#" onClick={() => setOpen(false)}>
            ABOUT
          </Link>
          <Link to="/#" onClick={() => setOpen(false)}>
            OUR PRODUCT
          </Link>
          <Link to="/#" onClick={() => setOpen(false)}>
            FARMING PRACTICE
          </Link>
          <Link to="/#" onClick={() => setOpen(false)}>
            NEWS
          </Link>
          <Link to="/#" onClick={() => setOpen(false)}>
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainBar1;
