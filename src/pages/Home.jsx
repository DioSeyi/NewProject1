import React from 'react'
import { Link } from 'react-router-dom';
import FpageAPI from '../components/FpageAPI';
import SpageAPI from '../components/SpageAPI';
import '../App.css'
import { MdOutlineMail } from 'react-icons/md';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLocationPin } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import MainBar from '../components/MainBar';
import MainBar1 from '../components/MainBar1'
import loading from '../assets/loadn.json';
import Lottie from 'lottie-react';
import {useState,useEffect,useRef} from 'react'
import image1 from '../assets/img5.png';
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
import image16 from '../assets/acaib.png';
import image17 from '../assets/prettylady.png';
import image18 from '../assets/quotes.png';
import image19 from '../assets/grassable.png';
import image20 from '../assets/grasable1.png';
import image21 from '../assets/footy1.png';
import image22 from '../assets/footy2.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sampleVideo from '../assets/handcereal1.mp4';
import ScrollToTopButton from '../components/ScrollToTopButton';
import StagingEnviron from '../components/StagingEnviron';

const Home = () => {

  const [load, setLoad] = useState(true)
    setTimeout(() => {
      setLoad(false)
    }, 5000);

  const [animate, setAnimate] = useState(true);
  
  const handleSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 50);
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };


  return (
<> 
    {
      // load ? 
      // <div
      //   style={{
      //     display: 'flex', 
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     height: '100vh',  
      //     width: '100%',  
      //     backgroundColor: 'rgba(103, 175, 35, 1)'
      //   }}>
      //   <div style={{ width: '400px' }}>
      //     <Lottie animationData={loading} loop={true} />
      //   </div>
      // </div> 
      // : 
    <div className="home-container">
        <MainBar />
        <MainBar1 />
        <ScrollToTopButton />

        <div className="carousel-wrapper">
          <div  style={{display:'flex'}}>
            <h2 className={`carousel-text ${animate ? 'animate-down' : ''}`}>
              The Hearth Of The Farm Is The True <br/>Center Of Our Universe.
            </h2>
            <p className={`carousel-text1 ${animate ? 'animate-down' : ''}`}>
              Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus.<br/> Aenean euismod est at mauris mollis ultricies.
              Morbi arcu mi, dictum eu luala, dapibus
              interdum mollis.
            </p><br/>
            <button className={`conButton ${animate ? 'animate-down' : ''}`}>CONTACT US</button>         

          <Carousel controls={false} indicators={false} interval={5000}
            onSlid={handleSlide}>
            <Carousel.Item>
              <img src={image1} alt='Farmie' className='home-image1' />
            </Carousel.Item>
              
            <Carousel.Item>
              <img src={image2} alt='Farmie' className='home-image1' />
            </Carousel.Item>
          </Carousel>
        </div>
        </div>

{/* 11-FarmEquipmentWithImage */}
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
{/* 10-ProduceVideo This div needs to e restructured*/}
      {/* <div className='videoSection'>

        <div className='container'>

          <div className='row'>
            <div className='col-8 1stsection-video'>
              <div className='aboutus'>
                <h5 style={{color:'rgb(150, 140, 140)'}}>About us</h5>
                <br />
                <h2 className='aboutus1'><span className='farmie-green1'>Let Us</span> Tell You Our Story</h2>
                <img className = 'abuimage' src={image9} alt='flower'/>
              </div>

                <p className='aboutus2'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Etiam nunc elit, pretium atlanta urna veloci, fermentum <br/>malesuda mina. Donec auctor nislec neque sagittis, sit amet dapibus pellentesque donal feugiat. Nulla mollis <br/>magna non sanaliquet, volutpat do zutum, ultrices consectetur, ultrices at purus.</p>
                <p className='readmore'>READ MORE</p>             
            </div> 

            <div className="col-4 video-circle" onClick={handlePlay}>
              {!isPlaying && <div className="play-button">&#9658;</div>}
              <video ref={videoRef}
                className="video-content"
                controls={false}
                onEnded={() => setIsPlaying(false)}>
                <source src={sampleVideo} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div> 

        </div>

      </div> */}
      <div className='container'>
        <div className="feedback-container">
        {/* Left Section */}
        {/* <div className="feedback-left">
          <img src={clientPic} alt="Client" className="client-image" />
          <p className="client-text">
            “Farmie gave me the best organic experience ever!”
          </p>
          <h4>- John Doe</h4>
        </div> */}
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

        {/* Right Section */}
          <div className="feedback-right">
            <video controls className="feedback-video">
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
{/* 9-FarmProducesDescriptions */}               
        <div className='col' style={{position:'relative'}}>
            <div className='rightside '>
              <div className='aboutus'>
                <h5 style={{color:'rgba(99, 84, 84, 1)'}}>What we do</h5>
                <br />
                <h2 className='aboutus1'><span className='farmie-green1'>Our Produce</span> Is Mainstay For Us</h2>
                <img src={image9} alt='flower'/>
              </div>

              <p className='aboutus2'>Mauris fermentum nunc quis massa lacinia consequat. Suspendisse orci magna, pharetra sedonia risus <br/>ut, elementum mollis nisin. Nunc in sapien turpis. Donec egeto david orci pulvinar ultrices necto drax <br/>turpis. Pellentesque justo metus, semper nec ullamcorper id, gravida ultricies arcu.
              </p>

              <div className='aboutus3'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center',gap:'10px'}}>
                  <div style={{display:'flex', flexDirection:'row', alignItems:'center',gap:'10px', marginLeft:'-145px'}}>
                    <img src={image10} alt='carrot' />
                    <h5>Fruit & Vegetable</h5>
                  </div>               
                  <p className='aboutus2' >
                    Intiam eu sagittis est, aster cosmo lacini libero. <br/>Praesent dignissim sed odio velo aliquam manta <br/>legolas. 
                  </p>
                </div>               

                <div style={{display:'flex', flexDirection:'column', alignItems:'center',gap:'10px'}}>
                  <div style={{display:'flex', flexDirection:'row', alignItems:'center',gap:'10px', marginLeft:'-145px'}}>
                    <img src={image11} alt='cofeggs' />
                    <h5 style={{paddingRight:'40px'}}>Meat & Eggs</h5>
                  </div>
                <p className='aboutus22' >
                    Intiam eu sagittis est, aster cosmo lacini libero.<br/> Praesent dignissim sed odio velo aliquam manta<br/> legolas.  
                </p>
                </div>
              </div>

              <div className='aboutus3'>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center',gap:'10px'}}>
                  <div style={{display:'flex', flexDirection:'row', alignItems:'center',gap:'10px', marginLeft:'-145px'}}>
                    <img src={image12} alt='carrot' />
                    <h5>Milk & Cheese</h5>
                  </div>               
                  <p className='aboutus2' >
                    Intiam eu sagittis est, aster cosmo lacini libero.<br/> Praesent dignissim sed odio velo aliquam manta <br/>legolas.  
                  </p>
                </div>               

                <div style={{display:'flex', flexDirection:'column', alignItems:'center',gap:'10px'}}>
                  <div style={{display:'flex', flexDirection:'row', alignItems:'center',gap:'10px', marginLeft:'-145px'}}>
                    <img src={image13} alt='cofeggs' />
                    <h5 style={{paddingRight:'40px'}}>Rice & Corn</h5>
                  </div>
                <p className='aboutus22' >
                    Intiam eu sagittis est, aster cosmo lacini libero.<br/> Praesent dignissim sed odio velo aliquam manta <br/>legolas.   
                </p>
                </div>
              </div>
            
            </div>

            <div className="leftside">
              <img src={image2} alt='Farmie' className='home-image4' />
            </div>      
        </div>
{/* 8-FarmProducesPrices */}
        <div style={{textAlign:'center', paddingTop:'100px'}}> 
          <div className='tenthsection'>
            <p>
              Featured Products
            </p>
            <h2>
              <span className='farmiegreen1'>Our Product </span> Are Highest Quality
            </h2>
            <img src={image14} alt='Farmie' style={{padding:'15px 0 50px'}} />
          </div>
          <div>
           <FpageAPI />
          </div>
          <div style={{display:'flex',alignContent:'center',justifyContent:'center'}} >
            <p className='readmore1'>Go To Store</p>
          </div>
        </div>        
{/* 7-Subscribe */}
        <div className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
          style={{height: "450px",backgroundSize: "cover",
          position:'relative',zIndex:'1',backgroundPosition: "center",backgroundImage: `url(${image15})`,display:'flex',flexDirection:'row',paddingTop:'80px',marginTop:'100px',justifyContent:'center',"--bs-gutter-x": "0.2rem"}}>
          <div className='nithsection'> 
            <p>
              What we do
            </p>
            <h2>
              Our Produce Is Mainstay For Us
            </h2>
            <img src={image14} alt='Farmie'  />

             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at diam convallis ligula cursus bibendum sed at enim. Class aptent taciti <br/> sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.
            </p>

            <div  className='searchBTN'>       
              <input className='inputfield' type="email" minLength={9} maxLength={50} placeholder="Enter your email"/>
              <button className="my-btn" type="submit" >SUBSCRIBE</button>
            </div>
          </div>         
          {/* <img src={image15} alt='cabage' className='carousel-text5' />          */}
        </div>
{/* 6-FarmProduce */}
        <div className="tenthsection-wrapper" >
          <div className='tenthsection'> 
            <p style={{color:'rgba(99, 84, 84, 1)'}}>
              MAKE THE GREEN WORLD
            </p>
            <h2>
              <span className='farmiegreen1'>Farming Practices</span> To Preserve <span className='mobileInLineBreak'>Land & Water</span>
            </h2>
            <img src={image14} alt='Farmie' style={{padding:'15px 0 50px'}} />
          </div> 
            <div>
              <SpageAPI />
            </div>
         
        </div>
{/* 5-Client */}
        <div 
          className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
          style={{height: "400px",backgroundSize: "cover",
          position:'relative',zIndex:'1',backgroundPosition: "center",backgroundImage: `url(${image16})`, top:'100px'}}>
          
            <div style={{display:'flex',flexDirection:'column'}}>

              <div style={{display:'flex',flexDirection:'row',paddingLeft:'400px',paddingTop:'90px',justifyContent:'center',gap:'40px'}}>
                <img style={{width:'40px', height: "30px"}} src={image18} alt='quote'/>
                <h5 style={{fontWeight:'15px',color:'white'}}>"Thank you for your organic product. My children like your products and they use for breakfast.We are loving the pure milk,<br/>froshly fruit and of course our sample, Brown Rice Bread. your Gluten free breads truly make me feel lighter and uplifted. it's the<br/> only bread I plan to eat for the rest of my life. I will use them for many years."</h5>
              </div>

              <div style={{display:'flex',flexDirection:'row',gap:'20px',marginTop: "-200px",marginLeft:'-500px',justifyContent:'center'}}>
                <img style={{width:'70px', height: "70px",border:'2px solid green',borderRadius:'50%',marginTop:'260px'}} src={image17} alt='ladyLogo' />
                <div style={{display:'flex',flexDirection:'column',padding:'270px 0 0 0'}}>
                  <h6 style={{color:'white',fontWeight:'bold'}}>Ajoy Das</h6>
                  <h7 style={{color:'green',fontWeight:'bold'}}>Client</h7>
                </div>
              </div>
            </div>         
        </div>
{/*4-GoogleMap */}
        <div style={{position:'relative',marginBottom:'-100px',display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'40px',paddingBottom:'100px'}}>
          <StagingEnviron />
        </div>
{/*3-Next2FooteStart*/}   
        <div style={{backgroundColor:'rgba(238, 239, 233, 1)', position:'relative',marginBottom:'-100px',display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'40px',paddingBottom:'40px'}}>
          <div className="containa">

            <div className="left">
              <img src={image19} alt='logo' style={{width:'100%', height:'100%'}} />
            </div>
            
            <div className="right">

              {[1, 2, 3].map((_, i) => (
                    <div key={i} className="mb-4 step1">
                      <p style={{ margin: '6px 20px', fontSize: '11px', color: 'rgba(196, 189, 189, 1)' }}>
                        Post on 18 Aug 2018 / Peter Crough
                      </p>
                      <h4
                        style={{
                          margin: '0 20px',
                          color: 'rgba(90, 89, 89, 1)',
                          fontFamily: 'Arial',
                          fontWeight: 'bold',
                          fontSize: '19px'
                        }}
                      >
                        Rising cattle supplies see beef export lifted
                      </h4>
                      <p style={{ margin: '10px 20px', fontSize: '14px', color: 'rgba(196, 189, 189, 1)' }}>
                        Maecenas facilisis quam orcit, velo porttitor arcu egestas eu. Maecenas<br/>
                        donald imperdiet nibh, quis. Etiam non scelerisque exited sagittis...
                      </p>
                    </div>
                  ))}

            </div>

          </div>
        </div>

{/*2-Footer Start */}
        <div className="custom-testimonial" style={{backgroundImage: `url(${image20})`}}>

            <div className="navlnk">
              <span className='farmie-green2'>
              FAR</span>MIE
              <div>
                  <p className='navlnk2'>
                    Lorem ipsum dolor sit amet,consecte<br/>stare adipiscing elit. In act honcus<br/>risus atiner Pellentesque risus.
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
                <FaFacebookF style={{border:'3px solid green', borderRadius:'50%',padding:'10px',color:'white',fontSize:'40px'}}/>
                <p>Twitter</p>
              </div>

               <div className='stayConn2'>
                <FaFacebookF style={{border:'3px solid green', borderRadius:'50%',padding:'10px',color:'white',fontSize:'40px'}}/>
                <p>Pinterest</p>
              </div>
            </div>
        </div>
{/* 1-FootNote */}
        <div className='fotnote'>
           <p>Copyright ©2025 All rights reserved | This template is made <span className='footnote1'>with <AiOutlineHeart /> by <span className='footnote'>Colorlib</span></span></p>  

           <div>
            <div className='footNavBar'>
              <p>About</p>
              <p>Produce</p>
              <p>Practice</p>
              <p>Products</p>
              <p>News</p>
              <p>Contact</p>
            </div>
           </div>
        </div>
    </div>
      
    }      
</>
  )
}

export default Home