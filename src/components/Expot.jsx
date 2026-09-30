import React, {useState,useEffect,useRef} from 'react'
import Select from "react-select";
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
import { AiOutlinePinterest } from "react-icons/ai";
import { RiPinterestLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import MainBar from '../components/MainBar';
import MainBar1 from '../components/MainBar1'
import loading from '../assets/loadn.json';
import Lottie from 'lottie-react';
import Slider from "react-slick";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import image15i from '../assets/veges.png';
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
import "../pages/StagingEnv.css";
import imagec2 from '../assets/client2.png';
import { MdChevronRight } from "react-icons/md";

const Expot = () => {

  const [showFilter, setShowFilter] = useState(true);
  const [showFilter1, setShowFilter1] = useState(true);
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

//   useEffect(() => {
//   fetch(`/api/users?status=${status}`)
//     .then(res => res.json())
//     .then(data => setUsers(data));
// }, [status]);

  return (
    <div>
      
       <div className="home-container">
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
               REPORT
            </h2>    
        </div>
        
        <div className="aboutPage">
            <h6 className="home-path">
                Home 
                <MdChevronRight size={25} className="arrowAUP" /> 
                Report
            </h6>
        </div>

          <div className='filter' onClick = {() => setShowFilter(!showFilter)}>
            <h5>Filter</h5>

            {showFilter ? (

              <FaChevronDown className='filterIcon'/> )
              :   
              (<FaChevronUp className='filterIcon1'/>      
            )}    
          </div> 
       

         {showFilter && ( <div className='report-container'>
            <div className = 'reportfields1'>
            
              <div className="data-row">
                {/* <div className="divider"></div> */}
                <input className="data-row1" type="text" placeholder='Select User' />
                <div className="divider"></div>
                <input className="data-row1" type="text" placeholder='Recharge No.' />
                <div className="divider"></div>
                <input className="data-row1" type="text" placeholder='Select Operator' />
                <div className="divider"></div>
                
                <select className="data-row1" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                  <option value="successful">Successful</option>
                </select>
                {/* <div className="divider"></div> */}
              </div>
        
              <div className="data-roww">
          
                <input className="data-row1" type="text" placeholder='UAPI TxnID / Op TxnID' />
                <div className="divider"></div>
                <input className="data-row1" type="text" placeholder='TxnID' />
                <div className="divider"></div>
                <input className="data-row1" type="text" placeholder='Calling  from API' />

                <div className="divider"></div>

                <div className="data-rowww">
                  <input className="data-row1" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}/>
                  <h6 style={{alignSelf:'center',padding:'10px 5px',margin:'0 -5px',backgroundColor:'lightgray'}}>to</h6>
                  <input className="data-row1" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}/>
                </div>

              </div>

              <div className="data-roll">
                <div className="data-ro">
                  <button className="data-row2">Filter</button>
                </div>
                  <div className="divider1"></div>   
                <div className="data-ro">
                  <button className="data-row22">Export</button>
                </div>
                  <div className="divider1"></div>          
              </div>

            </div>
          </div>

         )}


        <div className='filter1' onClick = {() => setShowFilter1(!showFilter1)}>
            <h5>Recharges List</h5>

            {showFilter1 ? (

              <FaChevronDown className='filterIcon'/> )
              :   
              (<FaChevronUp className='filterIcon1'/>      
            )}    
        </div> 

         {showFilter1 && ( 
          
          <div className='report-container'>
            <div style={{display:'flex',flexDirection:'column',gap:'20px',border:'1px solid rgb(80, 190, 80)'}}>

              {/* <div className="data-roll">
                <div className="divider1"></div>  
                <div className="data-ro">
                  <button className="data-row2">Filter</button>
                </div>
                  <div className="divider1"></div>   
                <div className="data-ro">
                  <button className="data-row22">Export</button>
                </div>
                  <div className="divider1"></div> 
                  <div className="data-ro">
                  <button className="data-row22">Export</button>
                </div>
                  <div className="divider1"></div>          
              </div> */}
              <div style={{border:'1px solid lightgray',margin:'10px',display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
                <select className="reportfilter" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Select Update Status</option>
                  <option value="failed">Failed</option>
                  <option value="successful">Successful</option>
                </select>
                    
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>  
                  <div className="divider2"></div>            
                  <button className="reportupadte">Manual Update</button>
                </div>
                  <div className="divider2"></div> 

                <div style={{display:'flex'}}>                   
                  <button className="reportupadte1">Bulk Status Change</button>
                </div>
                
              </div>

            </div>
          </div>

         )}
      
       
 

{/*2-Footer Start */}
      <div className="custom-testimonial" style={{backgroundImage: `url(${image20})`}}>

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

export default Expot