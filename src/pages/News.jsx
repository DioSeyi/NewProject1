import React from 'react'
import { useState } from "react";
import '../App.css'
import "../pages/StagingEnv.css";
import './About'
import TpageAPI from '../components/TpageAPI';
import FTpageAPI from '../components/FTpageAPI';
import SpageAPI from '../components/SpageAPI';
import '../components/TpageAPI.css'
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { MdOutlineMail } from 'react-icons/md';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
import { RiPinterestLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import MainBar from '../components/MainBar';
import MainBar1 from '../components/MainBar1'
import ScrollToTopButton from '../components/ScrollToTopButton';
import image2 from '../assets/img44.png';
import image3 from '../assets/farmview1.png';
import image4 from '../assets/farmhouse.png';
import image5 from '../assets/tools.png';
import image6 from '../assets/cereal.png';
import image7 from '../assets/tractor.png';
import image8 from '../assets/risingsun.png';
import image9 from '../assets/flower.png';
import image10 from '../assets/carrot.png';
import image11 from '../assets/createofeggs.png';
import image12 from '../assets/milkbottle.png';
import image13 from '../assets/cornleave.png';
import image14 from '../assets/flower1.png';
import image15 from '../assets/cabagess.png';
import image20 from '../assets/grasable1.png';
import image21 from '../assets/footy1.png';
import image22 from '../assets/footy2.png';
import image23 from '../assets/manfp.png';
import image24 from '../assets/ladyfp.png'; 
import image25 from '../assets/desert.png'; 
import image26 from '../assets/grazable.png'; 
import image27 from '../assets/mill1.png'; 
import image28 from '../assets/mill2.png'; 
import image29 from '../assets/mill3.png'; 
import image30 from '../assets/mill4.png'; 
import image31 from '../assets/kows.png'; 
import image32 from '../assets/berry.png'; 
import image33 from '../assets/honey.png'; 
import image34 from '../assets/mill5.png'; 
import image35 from '../assets/dot.png'; 
import image36 from '../assets/sereals.png'; 
import { MdChevronRight } from "react-icons/md";
import sampleVideo from '../assets/handcereal1.mp4';


const News = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [activeColor, setactiveColor] = useState("");

    const rows = [
    "Strawberries",
    "Tomatoes",
    "Sweet Corn",
    "Apples",
    "Root Vegetables",
    "Fresh Herbs",
    "Dairy & Eggs",
    "Honey",
  ];

  return (
    <div>  
        <MainBar />
        <MainBar1 />
        <ScrollToTopButton />

        <div className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
            style={{height: "300px",backgroundSize: "cover",
            position:'relative',zIndex:'1',backgroundPosition: "center",
            backgroundImage: `url(${image15})`,display:'flex',
            flexDirection:'row',alignItems:'center'
            ,justifyContent:'center',"--bs-gutter-x": "0.2rem",
            filter: "brightness(0.8)"}}>

            <h2 className='FamieHeader'>
                NEWS
            </h2>    
        </div>

        <h6 className="home-pathNews">
            Home 
            <MdChevronRight size={25} className="arrowAUP5" /> 
            News
        </h6>

        <div className='newsAl' >

            <div className='newsAl_l'>

                <div className='newsAl_left'>

                        <div className='newsPge1i'>                    
                            <p>Post on 18 Aug 2018 / Peter Crough</p>
                            <h3 style={{width:'100%', fontSize:'27px'}}>Rising cattle supplies see beef export lifted</h3>
                            <img src={image25} alt='newsimge1' className='newsimge1'/>
                            
                            <p>
                                Nunc aliquet, justo non commodo conguet, denim, action bibendum 
                                purus selecao samuel eget<span><br/></span> libero. Maecenas 
                                ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis 
                                quam at... 
                            </p>
                        </div>
                    
                        <div className='newsPge1i'>
                            <p>Post on 18 Aug 2018 / Peter Crough</p>
                            <h3 style={{width:'100%', fontSize:'26px'}}>Why innovation is key to maintaining our export <br/>market share</h3>
                            <img src={image26} alt='newsimge1' className='newsimge1'/>

                            <p>
                                Nunc aliquet, justo non commodo conguet, denim, action bibendum 
                                purus selecao samuel eget<span><br/></span> libero. Maecenas 
                                ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis 
                                quam at... 
                            </p>
                        </div>

                        <div className='newsPge1i'>
                            <p>Post on 18 Aug 2018 / Peter Crough</p>
                            <h3 style={{width:'100%', fontSize:'26px'}}>Cattle marts: Cows take a hit at the ringside</h3>
                            <img src={image31} alt='newsimge1' className='newsimge2'/>

                            <p>
                                Nunc aliquet, justo non commodo conguet, denim, action bibendum 
                                purus selecao samuel eget<span><br/></span> libero. Maecenas 
                                ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis 
                                quam at... 
                            </p>
                        </div>    

                        <div className='newsPge1i'>
                            <p>Post on 18 Aug 2018 / Peter Crough</p>
                            <h3 style={{width:'100%', fontSize:'26px'}}>Malting barley price negotiations set to commence</h3>
                            <img src={image36} alt='newsimge1' className='newsimge1'/>

                            <p>
                                Nunc aliquet, justo non commodo conguet, denim, action bibendum 
                                purus selecao samuel eget<span><br/></span> libero. Maecenas 
                                ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis 
                                quam at... 
                            </p>
                        </div>

                </div>

                <div className='newsAl_right'>
        
                    <div className="SearchBox"> 
                        <input type="text" placeholder="Search..." />
                        <LiaSearchSolid className='serachIcon' size={20} />
                    </div> 

                    <div className="newsgapping">                          

                        <div className="news-left">
                            <h5>Categories</h5>
                            <div className='newcategory'>
                                <h7>Recipe Collections</h7>
                                <h7>The advantage of knowledge</h7>
                                <h7>Organic Farming</h7>
                                <h7>Farming & Agricultural</h7>
                                <h7>Special Diet</h7>
                                <h7>How to Manage Soil Fertility</h7>
                            </div>
                        </div>

                        {/* <div className="newsgapping"> */}
                            <div className="news-left">
                                <h5>Recent News</h5>

                                <div className='recentnew'>

                                    <div className='recentnew1'>
                                        <img src={image27} alt='grains' style={{ width: "70px" }}/>
                                        <div className="recentnew11">
                                            <p>
                                                US milk production continues its upward trajectory for 2018
                                            </p>

                                            <span>18 Aug 2018</span>
                                        </div>
                        
                                    </div>

                                    <div className='recentnew1'>
                                        <img src={image28} alt='grains' style={{ width: "80px" }}/>
                                        <div className="recentnew11">
                                            <p>
                                                US milk production continues its upward trajectory for 2018
                                            </p>

                                            <span>18 Aug 2018</span>
                                        </div>
                        
                                    </div>

                                    <div className='recentnew1'>
                                        <img src={image29} alt='grains' style={{ width: "80px" }}/>
                                        <div className="recentnew11">
                                            <p>
                                                US milk production continues its upward trajectory for 2018
                                            </p>

                                            <span>18 Aug 2018</span>
                                        </div>
                        
                                    </div>

                                    <div className='recentnew1'>
                                        <img src={image30} alt='grains' style={{ width: "80px" }}/>
                                        <div className="recentnew11">
                                            <p>
                                                US milk production continues its upward trajectory for 2018
                                            </p>

                                            <span>18 Aug 2018</span>
                                        </div>
                        
                                    </div>

                                </div>
                            </div>
                        {/* </div> */}

                        <div className="news-left1">
                            <h5>Tags</h5>

                            <div className='recentnew'> 
                                <div className='recentneww'>

                                    <button
                                        className={activeColor === "all products" ? "activeColor" : "recentnewButton1"}
                                        onClick={() => setactiveColor("all products")}
                                    >
                                        All Products
                                    </button>

                                    <button
                                        className={activeColor === "freshly fruit" ? "activeColor" : "recentnewButton1"}
                                        onClick={() => setactiveColor("freshly fruit")}
                                    >
                                        Freshly Fruit
                                    </button>

                                    <button
                                        className={activeColor === "sweet corn" ? "activeColor" : "recentnewButton1"}
                                        onClick={() => setactiveColor("sweet corn")}
                                    >
                                        Sweet Corn
                                    </button>

                                </div>

                                <div className='recentneww'>

                                    <button
                                        className={activeColor === "chicken" ? "activeColor" : "recentnewButton2"}
                                        onClick={() => setactiveColor("chicken")}
                                    >
                                        Chicken
                                    </button>

                                    <button
                                        className={activeColor === "Organic" ? "activeColor" : "recentnewButton2"}
                                        onClick={() => setactiveColor("Organic")}
                                    >
                                        Organic
                                    </button>

                                    <button
                                        className={activeColor === "Practices" ? "activeColor" : "recentnewButton4"}
                                        onClick={() => setactiveColor("Practices")}
                                    >
                                        Farm Practices
                                    </button>

                                </div>

                                <div className='recentneww'>

                                    <button
                                        className={activeColor === "Meat" ? "activeColor" : "recentnewButton3"}
                                        onClick={() => setactiveColor("Meat")}
                                    >
                                        Meat
                                    </button>

                                    <button
                                        className={activeColor === "Recipe" ? "activeColor" : "recentnewButton4"}
                                        onClick={() => setactiveColor("Recipe")}
                                    >
                                        Recipe
                                    </button>

                                </div>
                                
                            </div>
                        </div>

                        <div className="news-left2">
                            <h5>Best Products</h5>

                            <div className='recentnew'>

                                <div className='recentnew1'>
                                    <img src={image32} alt='grains' style={{ width: "90px",height:'90px' }}/>
                                    <div className="recentnew12">
                                        <p>Srawberry</p>
                                        <h5>$17.99</h5>
                                        <img  src={image35} alt = 'dot' />
                                    </div>
                    
                                </div>

                                <div className='recentnew1'>
                                    <img src={image33} alt='grains' style={{ width: "90px",height:'90px' }}/>
                                    <div className="recentnew12">
                                        <p>Pure Honey</p>
                                        <h5>$17.99</h5>
                                        <img  src={image35} alt = 'dot' />
                                    </div>
                    
                                </div>

                                <div className='recentnew1'>
                                    <img src={image34} alt='grains' style={{ width: "90px",height:'90px' }}/>
                                    <div className="recentnew12">
                                        <p>Green Apple</p>
                                        <h5>$17.99</h5>
                                        <img  src={image35} alt = 'dot' />
                                    </div>
                    
                                </div>


                            </div>
                        </div>


                    </div>
                </div>

            </div>

            {/*2-Footer Start */}
            <div className="custom-testimonial_1" style={{backgroundImage: `url(${image20})`}}>           
                <div className="navlnk">
                    <span className='farmie-green2'>
                    FAR</span>MIE
                    <div>
                        <p className='navlnk2'>
                        Lorem ipsum dolor sit amet,consecte stare adipiscing <span className="mob-break"> <br/> 
                        </span>elit. In act honcus risus atiner Pellentesque risus.
                        </p>

                        <div style={{display:'flex', flexDirection:'column',gap:'20px'}}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <GrLocationPin size={20} color="green" />
                        <span style={{fontSize:'14px'}}>120 Raymond Rd, New York</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <IoMdMail size={20} color="green" />
                        <span style={{fontSize:'14px'}}>info.deercreative@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <FaPhoneAlt size={13} color='green'  />
                        <span style={{fontSize:'14px'}}>+84 223 9000</span>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="navlnk1">
                    QUICK LINK

                <div className='navlnkk'>
                    <span className='navlnk4'>Purchase</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='navlnk4'>Policies</span>
                </div>
                <div className='navlnk3'>
                    <span className='navlnk4'>Shipping</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='navlnk4'>FAQs</span>
                    </div>
                    <div className='navlnk3'>
                    <span className='navlnk4'>Return</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='navlnk4'>Careers</span>
                    </div>
                    <div className='navlnk3'>
                    <span className='navlnk4'>Payments</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='navlnk4'>Partners</span>
                    </div>
                    <div className='navlnk3'>
                    <span className='navlnk4'>Guide</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='navlnk4'>Standard</span>
                    </div>
                    <div className='navlnk3'>
                    <span className='navlnk4'>News</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className='navlnk4'>Brands</span>
                    </div>
                </div>

                <div className="navlnk1">
                    RECENT NEWS
                    <div style={{display:'flex',flexDirection:'row',gap:'30px'}}>
                    <img src={image21} alt='footy1' style={{height:'70px',marginTop:'35px'}}/>
                    <div>
                        <p className='navlnk5'>WA’s largest farming<br/>business on<span className='haffying' >the market</span> </p>
                        <p style={{marginTop:'-10px',fontSize:'12px'}}>18 Aug 2018</p>
                    </div>
                    </div>

                    <div style={{display:'flex',flexDirection:'row',gap:'30px',paddingTop:'20px'}}>
                    <img src={image22} alt='footy1'  style={{height:'70px'}}/>
                    <div>
                        <p className='navlnk6'>Beef retail prices hit a record</p>
                        <p style={{marginTop:'-10px',fontSize:'12px'}}>18 Aug 2018</p>
                    </div>
                    </div>
                </div>
        
                <div className="navlnk1">
                    STAY CONNECTED
                    
                    <div className='stayConn'>
                    <FaFacebookF className='FaFacebookF'/>
                    <p>Facebook</p>
                    </div>

                    <div className='stayConn1' >
                    <FiTwitter  className='FaFacebookF'/>
                    <p>Twitter</p>
                    </div>

                    <div className='stayConn2'>
                    <RiPinterestLine  className='FaFacebookF'/>
                    <p>Pinterest</p>
                    </div>
                </div>
            </div>
            {/* 1-FootNote */}
            <div className='fotnote_1'>

            <div className='lefty'>
                <p>
                Copyright ©2025 All rights reserved | This template is made 
                <span className='footnote_1'>
                    with <AiOutlineHeart /> by {" "}
                    <span className='footnote_2'>DioTech</span></span>
                </p> 
            </div>

            <div className='righty'>
                <a href='/about'>About</a>
                <a href='/about'>Produce</a>
                <a href='/about'>Practice</a>
                <a href='/about'>Products</a>
                <a href='/about'>News</a>
                <a href='/about'>Contact</a>
            </div>

            </div>   
    
        </div>
    </div>
  )
}

export default News