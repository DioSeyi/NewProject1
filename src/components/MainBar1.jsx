import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/MainBar1.css";
import { LiaSearchSolid } from "react-icons/lia";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdChevronRight } from "react-icons/md";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import Hamburger from "hamburger-react";
import Expot from "../components/Expot";

const MainBar1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  return (
    <>
      {/* Main Navbar */}
      <div className="MainBar1">
        <div style={{ display: "flex", flexDirection: "row",height:'100%',alignItems:'center'}}>
          <Link className="navlink" to="/">
            <span className="farmie-green1">FAR</span>MIE
          </Link>

          {/* Deskt Nav */}
          <ul className="navlinkss">

            <Link className="navlink11" to="/">
                HOME
            </Link>

            <Link className="navlink1" to="/about">
              ABOUT
            </Link>

            <div className="navlinks">
                <div className="down">
                  <Link className="navlink1" to="/#">
                    PAGES{" "}
                    <FaChevronDown
                      size={15}
                      style={{marginTop: "5px" }}
                    />
                  </Link>
                </div>

                <div className="dropdown">
                  <a className="dp1" href="/">
                    Home
                  </a>
                  <a className="dp1" href="/about">
                    About Us
                  </a>
                  <a className="dp1" href="/farmingpractice">
                    Farming Practice
                  </a>

                  <div className="navlinks1">
                    <div className="down1">
                      <a className="dp11" href="#">
                        Shop <MdChevronRight size={30} className="arrow" />
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
                        News <MdChevronRight size={30} className="arrow" />
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

                  <a className="dp1" href="/expot">
                    Reports
                  </a>
                </div>
            </div>

            <Link className="navlink1" to="/ourproduct">OUR PRODUCT</Link>
            <Link className="navlink1" to='/farmingpractice'>FARMING PRACTICE</Link>
            <Link className="navlink1" to='/news'>NEWS</Link>
            <Link className="navlink1" to="/contact">CONTACT</Link>
          </ul>

          {/* Deskt Icons */}
          <div className="nav-icons">
            <div style={{ position: "relative"}}>
              <span
                onClick={() => setShowSearch(prev => !prev)}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                <LiaSearchSolid />
              </span>
              {/* Search Box */}
              {showSearch && (
                <div className = 'mobPosition' >
                  <input 
                    type="text" 
                    placeholder="Type keywords & press enter..." 
                    className="mobSearch"
                  />
                </div>
                )}
            </div>
            <RiShoppingCart2Line size={20} />
          </div>

        </div>
        

        {/* Mob Hamburger */}
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

        {/* Mob Dropdown Overlay (80% width) */}
        <div className={isOpen ? "mobile active" : "mobile"}>
          <div className="ham1">
            <FaTimes
              size={26}
              color="white"
              className="close-icon"
              onClick={() => setOpen(false)}/>
          </div>

          <div className="mobile-links">
            <Link 
              to = "/"
              // onClick={() => {
              //   setOpen(false);
              //   window.location.reload();
              // }}
            >
              HOME
            </Link>
            <Link to = "/about" onClick={() => setOpen(false)}>
              ABOUT
            </Link>

            <div className="navlinks">
              <div className="down">
                <Link className="navlink1" to="/#">
                  PAGES{" "}
                  <FaChevronDown
                    size={17}
                    className="pagDrops"
                  />
                </Link>
              </div>

              <div className="dropdown">
                <a className="dp1" href="/">
                  Home
                </a>
                <a className="dp1" href="/about">
                  About Us
                </a>
                <a className="dp1" href="/farmingpractice">
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

                <a className="dp1" href="/expot">
                  Reports
                </a>
              </div>
            </div>

            <Link to = "/ourproduct" onClick={() => setOpen(false)}>
              OUR PRODUCT
            </Link>
            <Link to = "/farmingpractice" onClick={() => setOpen(false)}>
              FARMING PRACTICE
            </Link>
            <Link to = "/news" onClick={() => setOpen(false)}>
              NEWS
            </Link>
            <Link to = "/contact" onClick={() => setOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default MainBar1;
