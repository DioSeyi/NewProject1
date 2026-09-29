import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Alider.css";
import image1 from '../assets/img5.png';
import image2 from '../assets/img44.png';
import { useState } from "react";
import image16 from '../assets/acaib.png';
import image17 from '../assets/prettylady.png';
import image18 from '../assets/quotes.png';
import imagec2 from '../assets/client2.png';
import { useEffect } from "react";
import "../components/StagingEnviron.css";
import image19 from '../assets/grassable.png';
import image9 from '../assets/flower.png';
import image14 from '../assets/flower1.png';
import image15 from '../assets/cabagess.png';
import '../components/MainBar.css';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";

// const Alider = () => {
//   const [animate, setAnimate] = useState(true);
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,

//     // 👇 Re-trigger animation on every slide change
//     beforeChange: (current, next) => {
//       setAnimate(false); // reset animation
//       setTimeout(() => setAnimate(true), 50); // re-enable after 50ms
//       setActiveSlide(next);
//     },
//   };

//   return (
//     <div className="will">
//       <div className="slider-container">
//         <Slider {...settings}>
            
//           {/* <div>

//             <h2 className={`carousel-text ${animate ? 'animate-down' : ''}`}>
//               The Hearth Of The Farm Is The True <br/>Center Of Our Universe.
//             </h2>
//             <p className={`carousel-text1 ${animate ? 'animate-down' : ''}`}>
//               Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus.<br/> Aenean euismod est at mauris mollis ultricies.
//               Morbi arcu mi, dictum eu luala, dapibus
//               interdum mollis.
//             </p>
//             <br/>           
//             <button className={`conButton ${animate ? 'animate-down' : ''}`}>CONTACT US</button> 

//             <div className="red" controls={false} indicators={false} interval={5000}
//             onSlid={handleSlide}>
//               <img src={image1} alt='Farmie' className='home-image1' />
//             </div>
//           </div>

//           <div>
//             <div className="wine">
//               <img src={image2} alt='Farmie' className='home-image1' />
//             </div>
//           </div> */}

//           {/* <div className="slider-container">
//   <Slider {...settings}>
//     <div><img src={image1} alt="Farmie" className="home-image1" /></div>
//     <div><img src={image2} alt="Farmie" className="home-image1" /></div>
//   </Slider>

//   <div className="text-overlay">
//     <h2>The Hearth Of The Farm Is The True <br/>Center Of Our Universe.</h2>
//     <p>Mauris vestibulum dolor nec lacinia facilisis...</p>
//     <button>CONTACT US</button>
//   </div>
// </div> */}

// {/* Slide 1 */}
//   <div>
//     <div className="red">
//       <h2 className={`carousel-text ${animate ? 'animate-down' : ''}`}>
//         The Hearth Of The Farm Is The True <br/>Center Of Our Universe.
//       </h2>
//       <p className={`carousel-text1 ${animate ? 'animate-down' : ''}`}>
//         Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat.
//         Praesent eget varius ligula, malesuada eleifend purus.<br/>
//         Aenean euismod est at mauris mollis ultricies. Morbi arcu mi, dictum eu luala, dapibus interdum mollis.
//       </p>
//       <br/>
//       <button className={`conButton ${animate ? 'animate-down' : ''}`}>CONTACT US</button>
//       <img src={image1} alt='Farmie' className='home-image1' />
//     </div>
//   </div>

//   {/* Slide 2 */}
//   <div>
//     <div className="wine">
//       <h2 className={`carousel-text ${animate ? 'animate-down' : ''}`}>
//         The Hearth Of The Farm Is The True <br/>Center Of Our Universe.
//       </h2>
//       <p className={`carousel-text1 ${animate ? 'animate-down' : ''}`}>
//         Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat.
//         Praesent eget varius ligula, malesuada eleifend purus.<br/>
//         Aenean euismod est at mauris mollis ultricies. Morbi arcu mi, dictum eu luala, dapibus interdum mollis.
//       </p>
//       <br/>
//       <button className={`conButton ${animate ? 'animate-down' : ''}`}>CONTACT US</button>
//       <img src={image2} alt='Farmie' className='home-image1' />
//     </div>
//   </div>


//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Alider;



// I finally used this
// const Alider = () => {
//   const [animate, setAnimate] = useState(true);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     beforeChange: () => {
//       setAnimate(false);
//       setTimeout(() => setAnimate(true), 50);
//     },
//   };


//    return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {/* Slide 1 */}
//         <div className="slide">
//           <img src={image1} alt="Farmie" className="home-image1" />
//           <div className={`text-overlayy ${animate ? "fall-down" : ""}`}>
//             <h2>
//               The Hearth Of The Farm Is The True <br /> Center Of Our Universe.
//             </h2>
//             <p>
//               Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat.
//               Praesent eget varius ligula, malesuada eleifend purus. Aenean <br/> euismod est at mauris
//               mollis ultricies. Morbi arcu mi, dictum eu luala, dapibus interdum mollis.
//             </p>
//             <button>CONTACT US</button>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div className="slide">
//                     <img src={image2} alt="Farmie" className="home-image1" />
//                     <div className={`text-overlayy ${animate ? "rise-up" : ""}`}>
//                       <h2>
//                         The Hearth Of The Farm Is The True<br/>Center Of Our Universe.
//                       </h2>
//                       <p>
//                         Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat.
//                         Praesent eget varius ligula, malesuada eleifend purus. Aenean <br/>euismod est at mauris
//                         mollis ultricies. Morbi arcu mi, dictum eu luala, dapibus interdum mollis.
//                       </p>
//                       <button>CONTACT US</button>
//                     </div>
//         </div>
//       </Slider>

//     </div>
//   );

// };
// export default Alider;

{/* 5-Client */}
// const Alider = () => {

//   const testimonials = [
//   {
//     name: "Ajoy Das",
//     image: image17,
//     text: `"Thank you for your organic product. My children like your products and they use for breakfast.
//     We are loving the pure milk,froshly fruit and of course our sample, Brown Rice Bread. your Gluten
//     free breads truly make me feel lighter and uplifted. it's the only bread I plan to eat for the 
//     rest of my life. I will use them for many years."`
//   },
//   {
//     name: "Seyi Dada",
//     image: imagec2,
//     text: `"Thank you for your organic product. My children sometimes likes non-oganic product but yours are also good for breakfast.
//     Pprodcts like the pure milk,fresh fruit and obviously sample Brown Rice Bread. your Gluten
//     free breads are ueful for body monitoring especialy for weight loss. it's the only the brown 
//     rice atruely in love with and my kids loves all the products."`
//   }
// ];

// useEffect(() => {
//   const interval = setInterval(() => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   }, 4000);

//   return () => clearInterval(interval);
// }, []);

// const [index, setIndex] = useState(0);

// const nextSlide = () => {
//   setIndex((prev) => (prev + 1) % testimonials.length);
// };

// const prevSlide = () => {
//   setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// };

//   return (

//   <div 
//     className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
//     style={{
//       height: "480px",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundImage: `url(${image16})`,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       position:"relative",
//       top:'50px',
//     }}
//   >

//   <div className="clientReview" style={{
//       maxWidth: "1000px",
//       width: "100%",
//       textAlign: "center"
//     }}>

//     <div className="C-Review">

//       <img className="CI-Review" src={image18} alt="quote"/>

//       <h5 className="T-Review">
//         {testimonials[index].text}
//       </h5>
//     </div>

//     <div className="I-Review">
//       <img className="IC-Review" src={testimonials[index].image} alt="client"/>

//       <div style={{display:'flex',flexDirection:'column'}}>
//         <h6 style={{color:'white',fontWeight:'bold',paddingTop:'15px'}}>
//           {testimonials[index].name}
//         </h6>

//         <span style={{color:'green',fontWeight:'bold'}}>Client</span>
//       </div>
//     </div>

//   </div>

//   </div>
//     );
// };
// export default Alider;

  // "Position:relative" is needed to make sure the testimonial content is positioned correctly within the background image container.
        // <div 
        //     className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
        //     style={{height: "450px",backgroundSize: "cover",
        //     zIndex:'1',backgroundPosition: "center",backgroundImage: `url(${image16})`, position:'relative',top:'100px',justifyContent:'center',display:'flex',justifyItems:'center'}}>
            
        //       <div className= "E-Review">

        //         <div className= "C-Review">
        //           <img className= "CI-Review" src={image18} alt='quote'/>
        //           <h5 className= "T-Review">"Thank you for your organic product. My children like your products and they use for breakfast.<br/>We are loving the pure milk,froshly fruit and of course our sample, Brown Rice Bread. your Gluten <br/>free breads truly make me feel lighter and uplifted. it's the<br/> only bread I plan to eat for the rest of my life. I will use them for many years."</h5>
        //         </div>

        //         <div className= "I-Review">
        //           <img className= "IC-Review" src={image17} alt='ladyLogo' />
        //           <div style={{display:'flex',flexDirection:'column',padding:'270px 0 0 0'}}>
        //             <h6 style={{color:'white',fontWeight:'bold'}}>Ajoy Das</h6>
        //             <h7 style={{color:'green',fontWeight:'bold'}}>Client</h7>
        //           </div>
        //         </div>
        //       </div>         
        // </div>

//  {/* <div>
//         <div className="blue">
//           <h3>3</h3>
//         </div>
//       </div> */}


/* Forth */

// import image9 from '../assets/flower.png';
// import image10 from '../assets/carrot.png';
// import image11 from '../assets/createofeggs.png';
// import image12 from '../assets/milkbottle.png';
// import image13 from '../assets/cornleave.png';
// import image2 from '../assets/img44.png';
// import "./Alider.css";

// const about = () => {
//   return (
  
//         <div className='about-container'>

//             <div className="leftside">
//                 <img src={image2} alt='Farmie' className='home-image4' />
//             </div> 

//             <div className='col-9 rightside1'>

//             <div className='aboutus0'>
//                 <h5 style={{color:'rgba(99, 84, 84, 1)'}}>What we do</h5>

//                 <h2 className='aboutus11'><span className='farmie-green11'>Our Produce</span> Is Mainstay For Us</h2>
//                 <img src={image9} alt='flower'/><br/>
//             </div>

//             <p className="aboutus2">
//                 Mauris fermentum nunc quis massa lacinia consequat. Suspendisse orci magna, pharetra sedonia risus ut, elementum mollis nisin. Nunc in sapien turpis. Donec egeto david orci pulvinar ultrices necto drax turpis. Pellentesque justo metus, semper nec ullamcorper id, gravida ultricies arcu.
//             </p>

//             <div className="aboutus3">
//                 <div className="info-block">
//                     <div className="info-header">
//                     <img src={image10} alt="carrot" />
//                     <h5>Fruit & Vegetable</h5>
//                     </div>
//                     <p className="aboutus20">
//                     Intiam eu sagittis est, aster cosmo lacini libero.
//                     Praesent dignissim sed odio velo aliquam manta legolas.
//                     </p>
//                 </div>

//                 <div className="info-block">
//                     <div className="info-header">
//                     <img src={image11} alt="eggs" />
//                     <h5>Meat & Eggs</h5>
//                     </div>
//                     <p className="aboutus20">
//                     Intiam eu sagittis est, aster cosmo lacini libero.
//                     Praesent dignissim sed odio velo aliquam manta legolas.
//                     </p>
//                 </div>
//             </div>

//             <div className="aboutus3">
//                 <div className="info-block">
//                     <div className="info-header">
//                         <img src={image12} alt="carrot" />
//                         <h5>Milk & Cheese</h5>
//                     </div>
//                     <p className="aboutus20">
//                     Intiam eu sagittis est, aster cosmo lacini libero.
//                     Praesent dignissim sed odio velo aliquam manta legolas.
//                     </p>
//                 </div>

//                 <div className="info-block">
//                     <div className="info-header">
//                         <img src={image13} alt="eggs" />
//                         <h5>Rice & Corn</h5>
//                     </div>
//                     <p className="aboutus20">
//                     Intiam eu sagittis est, aster cosmo lacini libero.
//                     Praesent dignissim sed odio velo aliquam manta legolas.
//                     </p>
//                 </div>
//             </div>
//             </div>   

//         </div>
//   )
// }

// export default about;


// import React from 'react'
// import image16 from '../assets/acaib.png';
// import image17 from '../assets/prettylady.png';
// import image18 from '../assets/quotes.png';
// import "./Alider.css";

// const Alider = () => {
//   return (
//     <>
//         <div 
//              className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
//              style={{height: "400px",backgroundSize: "cover",
//              position:'relative',zIndex:'1',backgroundPosition: "center",
//              backgroundImage: `url(${image16})`, top:'100px'}}>
             
//                <div style={{display:'flex',flexDirection:'column'}}>
   
//                  <div style={{display:'flex',flexDirection:'row',justifyItems:'center',
//                   paddingTop:'90px',justifyContent:'center',gap:'40px'}}>
//                    <img style={{width:'40px', height: "30px"}} src={image18} alt='quote'/>
//                    <h5 style={{fontWeight:'15px',color:'white'}}>"Thank you for your organic product. 
//                     My children like your products and they use for breakfast.
//                     We are loving the pure milk,<br/>freshly fruit and of course our sample, 
//                     Brown Rice Bread. your Gluten free breads truly make me feel lighter 
//                     and uplifted. it's the<br/> only bread I plan to eat for the rest of my life.
//                      I will use them for many years."</h5>
//                  </div>
   
//                  <div style={{display:'flex',flexDirection:'row',gap:'30px',
//                   justifyContent:'left',marginTop:'-220px',marginLeft:'185px'}}>
//                    <img style={{width:'90px', height: "90px",border:'2px solid green',
//                     borderRadius:'50%',marginTop:'260px'}} src={image17} alt='ladyLogo' />
//                    <div style={{display:'flex',flexDirection:'column',padding:'280px 0 0 0'}}>
//                      <h6 style={{color:'white',fontWeight:'bold'}}>Ajoy Das</h6>
//                      <h7 style={{color:'green',fontWeight:'bold'}}>Client</h7>
//                    </div>
//                  </div>
//                </div>         
//         </div>

//         <div 
//              className="testimonial-area bg-img bg-overlay section-padding-100 jarallax"
//              style={{height: "400px",backgroundSize: "cover",
//              position:'relative',zIndex:'1',backgroundPosition: "center",
//              backgroundImage: `url(${image16})`, top:'100px'}}>
             
//                <div style={{display:'flex',flexDirection:'column'}}>
   
//                  <div style={{display:'flex',flexDirection:'row',justifyItems:'center',
//                   paddingTop:'90px',justifyContent:'center',gap:'40px'}}>
//                    <img style={{width:'40px', height: "30px"}} src={image18} alt='quote'/>
//                    <h5 style={{fontWeight:'15px',color:'white'}}>"Thank you for your organic product. 
//                     My children like your products and they use for breakfast.
//                     We are loving the pure milk,<br/>freshly fruit and of course our sample, 
//                     Brown Rice Bread. your Gluten free breads truly make me feel lighter 
//                     and uplifted. it's the<br/> only bread I plan to eat for the rest of my life.
//                      I will use them for many years."</h5>
//                  </div>
   
//                  <div style={{display:'flex',flexDirection:'row',gap:'30px',
//                   justifyContent:'left',marginTop:'-220px',marginLeft:'185px'}}>
//                    <img style={{width:'90px', height: "90px",border:'2px solid green',
//                     borderRadius:'50%',marginTop:'260px'}} src={image17} alt='ladyLogo' />
//                    <div style={{display:'flex',flexDirection:'column',padding:'280px 0 0 0'}}>
//                      <h6 style={{color:'white',fontWeight:'bold'}}>Akash Khan</h6>
//                      <h7 style={{color:'green',fontWeight:'bold'}}>Client</h7>
//                    </div>
//                  </div>
//                </div>         
//         </div>



//     </>
//   )
// }

// export default Alider

const Alider = () => {
 
  return (
 
     <>
      
     </>
    )
}
export default Alider