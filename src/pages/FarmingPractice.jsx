import React from 'react'
import { useState } from "react";
import '../App.css'
import '../pages/StagingEnv.css'
import '../pages/About'
import TpageAPI from '../components/TpageAPI';
import FTpageAPI from '../components/FTpageAPI';
import SpageAPI from '../components/SpageAPI';
import '../components/TpageAPI.css'
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
import { MdChevronRight } from "react-icons/md";
import sampleVideo from '../assets/handcereal1.mp4';


const FarmingPractice = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    // const rows = Array.from({ length: 10 });

    // const headerStyle = {
    // textAlign: "left",
    // padding: "12px",
    // borderBottom: "2px solid #ccc",
    // };

    // const rowStyle = {
    // borderBottom: "1px solid #e5e5e5",
    // };

    // const cellStyle = {
    // padding: "12px",
    // };
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
            style={{height: "380px",backgroundSize: "cover",
            position:'relative',zIndex:'1',backgroundPosition: "center",
            backgroundImage: `url(${image15})`,display:'flex',
            flexDirection:'row',alignItems:'center'
            ,justifyContent:'center',"--bs-gutter-x": "0.2rem",
            filter: "brightness(0.8)"}}>

            <h2 className='FamieHeader'>
                FARMING PRACTICE
            </h2>    
        </div>
        
        <div className="aboutPage">

            <h6 className="home-path">
                <div>Home <MdChevronRight size={25} className="arrowAUP" /> Farming Practice</div>
                {/* <button>Report</button> */}
            </h6>
{/*FP_1 */}
            <div className='manFP'>

                <div className='manfp1'>
                    <img src={image23} alt='Farmie' className='manfp_1'/>
                </div>

                <div className='manfp2' >
                  
                    <h6>FARMING PROCESS</h6>
                    <h2>Farming Practices & Methods</h2>
                    <img src={image9} alt='flower' className='manfpimage'/>     
                              
                    <p>
                       Lorem ipsum dolor sit amet, consectetu adipiscing elit. 
                       Etiam nunc elit, pretium atlanta urna veloci, fermentum malesuda 
                       mina. Donec auctor nislec neque sagittis, sit amet dapibus 
                       pellentesque donal feugiat. Nulla mollis magna non sanaliquet, 
                       volutpat do zutum, ultrices consectetur, ultrices at purus.
                    </p>
                    <p className='readmore2'>READ MORE</p>     
                </div>

            </div>

{/* 6-FarmProduce */}
        <div className="tenthsection-wrapper" >
          <div className='tenthsection'> 
            <p style={{color:'rgba(99, 84, 84, 1)'}}>
              MAKE THE GREEN WORLD
            </p>
            <h4>
              <span className='farmiegreen1'>Farming Practices</span> To Preserve <span className='mobileInLineBreak'>Land & Water</span>
            </h4>
            <img src={image14} alt='Farmie' style={{padding:'15px 0 30px'}} />
          </div> 
            <div>
              <SpageAPI />
            </div>
         
        </div>
    
{/* dropping down */}
        <div>
            <div className='tenthsection'> 
                <p style={{color:'rgba(99, 84, 84, 1)'}}>
                    HAVE A QUESTION?
                </p>
                <h5>
                    <span className='farmiegreen1'>Get answers</span> to FAQs about the service <span className='mobileInLineBreak'>Land & Water</span>
                </h5>
                <img src={image14} alt='Farmie' style={{padding:'15px 0 30px'}} />

            </div> 


            <div style={{display:'flex',flexDirection:'column'}}> 
            
                <div style={{padding:'10px', }}>
                    {/* Header with arrow */}
                    <div
                        onClick={() => setOpen(!open)}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",   // SAME width as the paragraph
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "15px",
                                color: open ? "#8cc751" : "black",
                            }}
                        >
                            <span style={{fontSize:'15px', paddingTop:'3px'}}>
                                {open ? "▼" : "▲"}
                            </span>

                            <span style={{fontSize:'22px',fontWeight:'bold',fontFamily:'calibri',opacity:'0.7'}}>
                                Are Organic Products Of The Same Quality As Other Food And Drink?
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",
                            }}
                        >
                            {/* Animated wrapper */}
                            <div
                                style={{
                                    maxHeight: open ? "150px" : "0px",
                                    opacity: open ? 1 : 0,
                                    overflow: "hidden",
                                    transition: "all 1s ease",                            //*transition: "max-height 1.2s ease, opacity 0.8s ease",*//
                                }}
                            >
                                <p
                                    style={{
                                        lineHeight: "1.6",
                                        fontSize: "13px",
                                        color: "gray",
                                        wordSpacing: "2px",
                                        alignItems:'center'
                                    }}
                                >
                                    Organic production methods differ from conventional ones – but the aim is nonetheless to produce top-
                                    quality food and drink. Organic produce has to meet the same safety<br/> standards as other foods and
                                    complies with EU General Food law. The difference is that instead of using chemical compounds to
                                    combat pests or weeds, organic farmers use<br/> multi-annual crop rotations and resistant
                                    varieties to prevent such problems from occurring in the first place.
                                </p>

                                {/* 👇 THIS is the “zip line” */}
                                
                            </div>
                                <div style={{
                                        borderBottom: "1px solid rgba(128,128,128,0.3)",
                                       }}/>
                                <div/>
                        </div>
                    </div>
                </div>
    
                <div style={{padding:'10px'}}>
                    {/* Header with arrow */}
                    <div
                        onClick={() => setOpen1(!open1)}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",   // SAME width as the paragraph
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "15px",
                                color: open1 ? "green" : "black",
                            }}
                        >
                            <span style={{fontSize:'15px', paddingTop:'3px'}}>
                                {open1 ? "▼" : "▲"}
                            </span>

                            <span style={{fontSize:'22px',fontWeight:'bold',fontFamily:'calibri',opacity:'0.7'}}>
                                Are Organic Products Of The Same Quality As Other Food And Drink?
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",
                            }}
                        >
                            {/* Animated wrapper */}
                            <div
                                style={{
                                    maxHeight: open1? "150px" : "0px",
                                    opacity: open1 ? 1 : 0,
                                    overflow: "hidden",
                                    transition: "all 1s ease",                            //*transition: "max-height 1.2s ease, opacity 0.8s ease",*//
                                }}
                            >
                                <p
                                    style={{
                                        lineHeight: "1.6",
                                        fontSize: "13px",
                                        color: "gray",
                                        wordSpacing: "2px",
                                        alignItems:'center'
                                    }}
                                >
                                    Organic production methods differ from conventional ones – but the aim is nonetheless to produce top-
                                    quality food and drink. Organic produce has to meet the same safety<br/> standards as other foods and
                                    complies with EU General Food law. The difference is that instead of using chemical compounds to
                                    combat pests or weeds, organic farmers use<br/> multi-annual crop rotations and resistant
                                    varieties to prevent such problems from occurring in the first place.
                                </p>

                                {/* 👇 THIS is the “zip line” */}
                                
                            </div>
                                <div style={{
                                        borderBottom: "1px solid rgba(128,128,128,0.3)",
                                       }}/>
                                <div/>
                        </div>
                    </div>
                </div>

                <div style={{padding:'10px'}}>
                    {/* Header with arrow */}
                    <div
                        onClick={() => setOpen2(!open2)}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",   // SAME width as the paragraph
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "15px",
                                color: open2 ? "green" : "black",
                            }}
                        >
                            <span style={{fontSize:'15px', paddingTop:'3px'}}>
                                {open2 ? "▼" : "▲"}
                            </span>

                            <span style={{fontSize:'22px',fontWeight:'bold',fontFamily:'calibri',opacity:'0.7'}}>
                                Are Organic Products Of The Same Quality As Other Food And Drink?
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",
                            }}
                        >
                            {/* Animated wrapper */}
                            <div
                                style={{
                                    maxHeight: open2? "150px" : "0px",
                                    opacity: open2 ? 1 : 0,
                                    overflow: "hidden",
                                    transition: "all 1s ease",                            //*transition: "max-height 1.2s ease, opacity 0.8s ease",*//
                                }}
                            >
                                <p
                                    style={{
                                        lineHeight: "1.6",
                                        fontSize: "13px",
                                        color: "gray",
                                        wordSpacing: "2px",
                                        alignItems:'center'
                                    }}
                                >
                                    Organic production methods differ from conventional ones – but the aim is nonetheless to produce top-
                                    quality food and drink. Organic produce has to meet the same safety<br/> standards as other foods and
                                    complies with EU General Food law. The difference is that instead of using chemical compounds to
                                    combat pests or weeds, organic farmers use<br/> multi-annual crop rotations and resistant
                                    varieties to prevent such problems from occurring in the first place.
                                </p>

                                {/* 👇 THIS is the “zip line” */}
                                
                            </div>
                                <div style={{
                                        borderBottom: "1px solid rgba(128,128,128,0.3)",
                                       }}/>
                                <div/>
                        </div>
                    </div>
                </div>

                <div style={{padding:'10px'}}>
                    {/* Header with arrow */}
                    <div
                        onClick={() => setOpen3(!open3)}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",   // SAME width as the paragraph
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "15px",
                                color: open3 ? "green" : "black",
                            }}
                        >
                            <span style={{fontSize:'15px', paddingTop:'3px'}}>
                                {open3 ? "▼" : "▲"}
                            </span>

                            <span style={{fontSize:'22px',fontWeight:'bold',fontFamily:'calibri',opacity:'0.7'}}>
                                Are Organic Products Of The Same Quality As Other Food And Drink?
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",
                            }}
                        >
                            {/* Animated wrapper */}
                            <div
                                style={{
                                    maxHeight: open3? "150px" : "0px",
                                    opacity: open3 ? 1 : 0,
                                    overflow: "hidden",
                                    transition: "all 1s ease",                            //*transition: "max-height 1.2s ease, opacity 0.8s ease",*//
                                }}
                            >
                                <p
                                    style={{
                                        lineHeight: "1.6",
                                        fontSize: "13px",
                                        color: "gray",
                                        wordSpacing: "2px",
                                        alignItems:'center'
                                    }}
                                >
                                    Organic production methods differ from conventional ones – but the aim is nonetheless to produce top-
                                    quality food and drink. Organic produce has to meet the same safety<br/> standards as other foods and
                                    complies with EU General Food law. The difference is that instead of using chemical compounds to
                                    combat pests or weeds, organic farmers use<br/> multi-annual crop rotations and resistant
                                    varieties to prevent such problems from occurring in the first place.
                                </p>

                                {/* 👇 THIS is the “zip line” */}
                                
                            </div>
                                <div style={{
                                        borderBottom: "1px solid rgba(128,128,128,0.3)",
                                       }}/>
                                <div/>
                        </div>
                    </div>
                </div>

                <div style={{padding:'10px'}}>
                    {/* Header with arrow */}
                    <div
                        onClick={() => setOpen4(!open4)}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",   // SAME width as the paragraph
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "15px",
                                color: open4 ? "green" : "black",
                            }}
                        >
                            <span style={{fontSize:'15px', paddingTop:'3px'}}>
                                {open4 ? "▼" : "▲"}
                            </span>

                            <span style={{fontSize:'22px',fontWeight:'bold',fontFamily:'calibri',opacity:'0.7'}}>
                                Are Organic Products Of The Same Quality As Other Food And Drink?
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "1100px",
                            }}
                        >
                            {/* Animated wrapper */}
                            <div
                                style={{
                                    maxHeight: open4? "150px" : "0px",
                                    opacity: open4 ? 1 : 0,
                                    overflow: "hidden",
                                    transition: "all 1s ease",                            //*transition: "max-height 1.2s ease, opacity 0.8s ease",*//
                                }}
                            >
                                <p
                                    style={{
                                        lineHeight: "1.6",
                                        fontSize: "13px",
                                        color: "gray",
                                        wordSpacing: "2px",
                                        alignItems:'center'
                                    }}
                                >
                                    Organic production methods differ from conventional ones – but the aim is nonetheless to produce top-
                                    quality food and drink. Organic produce has to meet the same safety<br/> standards as other foods and
                                    complies with EU General Food law. The difference is that instead of using chemical compounds to
                                    combat pests or weeds, organic farmers use<br/> multi-annual crop rotations and resistant
                                    varieties to prevent such problems from occurring in the first place.
                                </p>

                                {/* 👇 THIS is the “zip line” */}
                                
                            </div>
                                <div style={{
                                         borderBottom: "1px solid rgba(128,128,128,0.3)",
                                       }}/>
                                <div/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
       

    {/* Tabke_Rows */}
        <div>
            <div className='tenthsection'> 
                    <p style={{color:'rgba(99, 84, 84, 1)'}}>
                       PLAN YOUR PURCHASES
                    </p>
                    <h5>
                        <span className='farmiegreen1'>Seasonal </span>  <span className='mobileInLineBreak'>Availability Calendar</span>
                    </h5>
                    <img src={image14} alt='Farmie' style={{padding:'15px 0 30px'}} />

            </div> 

            {/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center',width:'100%',alignItems:'center',justifyItems:'center',alignContent:'center'}}>

                <div style={{backgroundColor:'lightBlue',display:'flex',flexDirection:'row',gap:'130px',alignItems:'center',justifyContent:'center', padding:'10px',borderBottom: "1px solid rgba(128,128,128,0.3)", borderTop: "1px solid rgba(128,128,128,0.3)",}}>
                    <h6>Product</h6>
                    <h6>Spring</h6>
                    <h6>Summer</h6>
                    <h6>Autumn</h6>
                    <h6>Winter</h6>
                </div>
           

               <div style={{backgroundColor:'grey',display:'flex',flexDirection:'row',gap:'130px',alignItems:'center',justifyContent:'center',width:'70%', padding:'10px',borderBottom: "1px solid rgba(128,128,128,0.3)", borderTop: "1px solid rgba(128,128,128,0.3)",}}>
                    <h6>Strawberries</h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>

            </div> */}

            {/* <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                }}
                >
                <thead>
                    <tr>
                    <th style={headerStyle}>Name</th>
                    <th style={headerStyle}>Age</th>
                    <th style={headerStyle}>Country</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((_, index) => (
                    <tr key={index} style={rowStyle}>
                        <td style={cellStyle}>John Doe</td>
                        <td style={cellStyle}>25</td>
                        <td style={cellStyle}>Nigeria</td>
                    </tr>
                    ))}
                </tbody>
            </table> */}

            <div className="tableWrapper">
                <table className="table1">

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Spring</th>
                            <th>Summer</th>
                            <th>Autumn</th>
                            <th>Winter</th>
                        </tr>
                    </thead>

                    <tbody className='tem1'>
                        {rows.map((item, index) => (
                            <tr key={index}>
                            <td>{item}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    {/* Form-Lady */}
        {/* <div style={{backgroundColor:'rgb(241, 241, 241)'}}> 
            <div className='tenthsection'>
                <p>
                    CERTIFIED QUALITY
                </p>
                <h4 style={{fontWeight:'bolder', fontSize:'25px',lineHeight:'1.9',letterSpacing:'2.0px'}}>
                <span className='farmiegreen1'>Our Certifications </span> & Guarantees
                </h4>
                <img src={image14} alt='Farmie' style={{padding:'15px 0 50px'}} />
            </div>
            <div>
                <FTpageAPI/>
            </div>
        </div>   */}
    
        <div className='formladyWrapper'>
            <div className='ladyform'>
                <div className='ladyform1' >
                  
                    <h5>BECOME A FARMER</h5>
                    <h2>Start an, Apprenticeship Program</h2>
                    <img src={image9} alt='flower'/>     
                              
                    <div className='formlady2'>
                      <input className='form1' type="text" minLength={9} maxLength={50} placeholder="Your Name"/>
    
                      <input className='form1' type="text" minLength={9} maxLength={50} placeholder="Your Email"/>         
                    </div>
    
                    <input className='form2' type="text" minLength={9} maxLength={50} placeholder="Your Subject"/>                  
                    {/* <div class="parent-container">  */}
                    <textarea className='form3' type="text" minLength={0} maxLength={1000} placeholder="Your Message"/>
    
                    <button className="readmor1" type="submit" >SEND MESSAGE</button>   
                </div>

                <div className='ladyform3'>
                    <img src={image24} alt='Farmie'/>
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

export default FarmingPractice