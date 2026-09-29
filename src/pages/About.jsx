import React from 'react'
import '../App.css'
import TpageAPI from '../components/TpageAPI';
import FTpageAPI from '../components/FTpageAPI';
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
import image15i from '../assets/veges.png';
import image20 from '../assets/grasable1.png';
import image21 from '../assets/footy1.png';
import image22 from '../assets/footy2.png';
import { MdChevronRight } from "react-icons/md";
import sampleVideo from '../assets/handcereal1.mp4';


const About = () => {
  return (
    <div>  
        <MainBar />
        <MainBar1 />
        <ScrollToTopButton />

        <div className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
            style={{height: "380px",backgroundSize: "cover",
            position:'relative',zIndex:'1',backgroundPosition: "center",
            backgroundImage: `url(${image15i})`,display:'flex',
            flexDirection:'row',alignItems:'center'
            ,justifyContent:'center',"--bs-gutter-x": "0.2rem",
            filter: "brightness(0.8)"}}>

            <h2 className='FamieHeader'>
                ABOUT US
            </h2>    
        </div>
        
        <div className="aboutPage">

            <h6 className="home-path">
                Home 
                <MdChevronRight size={25} className="arrowAUP" /> 
                About
            </h6>

            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} className='container'>
                <div className='this-Incolomn'>
        
                    <img src={image3} alt='Farmie' className='home-image2' />
    
                    <div  className='farmImage'>
                        <div className='farmImage1'>
                            <img src={image5} alt='Farmie' className='home-image3' />
                            <p>Best Services</p>
                        </div>
        
                        <div className='farmImage1'>
                            <img src={image4} alt='Farmie' className='home-image3' />
                            <p>Farm Experiences</p>
                        </div>
        
                        <div className='farmImage1'>
                            <img src={image6} alt='Farmie' className='home-image3' />
                            <p>100% Natural</p>
                        </div>
        
                        <div className='farmImage1'>
                            <img src={image7} alt='Farmie' className='home-image3' />
                            <p>Farm Equipment</p>
                        </div>
                    
                        <div className='farmImage1'>
                            <img src={image8} alt='Farmie' className='home-image3' />
                            <p>Organic food</p>
                        </div> 
                    </div>
    
                </div>
            </div>

            <div style={{overflow:'hidden',backgroundColor:'rgb(228, 228, 228)'}}>
                <div className='container'>
                    <div className="feedback-container">
                        <div className ='feedback-left'>
                            <div className='aboutus'>
                                <h5 style={{color:'rgb(150, 140, 140)'}}>About us</h5>
                                <br />
                                <h2 className='aboutus1'><span className='farmie-green1'>Let Us</span> Tell You Our Story</h2>
                                <img className = 'abuimage' src={image9} alt='flower'/>
                            </div>
            
                            <p className='aboutus2'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam nunc elit, pretium atlanta urna veloci, fermentum <br/>malesuda mina. Donec auctor nislec neque sagittis, sit amet dapibus pellentesque donal feugiat. Nulla mollis <br/>magna non sanaliquet, volutpat do zutum, ultrices consectetur, ultrices at purus.</p>
                            <p className='readmore'>READ MORE</p>             
                        </div> 
                        
                        <div className="feedback-right">
                            <video controls className="feedback-video">
                                <source src={sampleVideo} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className='contents'>
                <div className="leftside">
                    <img src={image2} alt='Farmie' className='home-image4' />
                </div> 
                
                <div className='rightside1'>

                    <div className='aboutus0'>
                        <h5 style={{color:'rgba(99, 84, 84, 1)'}}>What we do</h5>

                        <h2 className='aboutus11'><span className='farmie-green11'>Our Produce </span> Is Mainstay For Us</h2>
                        <img src={image9} alt='flower'/><br/>
                    </div>

                    <p className="aboutus2">
                        Mauris fermentum nunc quis massa lacinia consequat. Suspendisse orci magna, pharetra sedonia risus ut, elementum mollis nisin. Nunc in sapien turpis. Donec egeto david orci pulvinar ultrices necto drax turpis. Pellentesque justo metus, semper nec ullamcorper id, gravida ultricies arcu.
                    </p>

                    <div className="aboutus3">
                        <div className="info-block">
                            <div className="info-header">
                            <img src={image10} alt="carrot" />
                            <h5>Fruit & Vegetable</h5>
                            </div>
                            <p className="aboutus20">
                            Intiam eu sagittis est, aster cosmo lacini libero.
                            Praesent dignissim sed odio velo aliquam manta legolas.
                            </p>
                        </div>

                        <div className="info-block">
                            <div className="info-header">
                            <img src={image11} alt="eggs" />
                            <h5>Meat & Eggs</h5>
                            </div>
                            <p className="aboutus20">
                            Intiam eu sagittis est, aster cosmo lacini libero.
                            Praesent dignissim sed odio velo aliquam manta legolas.
                            </p>
                        </div>
                    </div>

                    <div className="aboutus3">
                        <div className="info-block">
                            <div className="info-header">
                                <img src={image12} alt="carrot" />
                                <h5>Milk & Cheese</h5>
                            </div>
                            <p className="aboutus20">
                            Intiam eu sagittis est, aster cosmo lacini libero.
                            Praesent dignissim sed odio velo aliquam manta legolas.
                            </p>
                        </div>

                        <div className="info-block">
                            <div className="info-header">
                                <img src={image13} alt="eggs" />
                                <h5>Rice & Corn</h5>
                            </div>
                            <p className="aboutus20">
                            Intiam eu sagittis est, aster cosmo lacini libero.
                            Praesent dignissim sed odio velo aliquam manta legolas.
                            </p>
                        </div>
                    </div>
                </div>   
            </div>

    {/* 8-FarmProducesPrices */}
            <div style={{textAlign:'center'}}> 
                <div className='tenthsection'>
                    <p>
                        MEET OUR TEAM
                    </p>
                    <h4 style={{fontSize:'25px',lineHeight:'1.9',letterSpacing:'2.0px'}}>
                        <span className='farmiegreen1'>The Great Team </span>Will Always
                        <span className="mob-break"> <br /> </span> Help You
                    </h4>
                    <img src={image14} alt='Farmie' style={{padding:'15px 0 30px'}} />
                </div>
                <div>
                     <TpageAPI/>
                </div>
            </div>  

            <div style={{backgroundColor:'rgb(241, 241, 241)'}}> 
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

export default About