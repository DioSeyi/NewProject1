import React from "react";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Alider.css";
// import image1 from '../assets/img5.png';
// import image2 from '../assets/img44.png';
// import { useState } from "react";

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
//           <div className={`text-overlay ${animate ? "fall-down" : ""}`}>
//             <h2>
//               The Hearth Of The Farm Is The True <br /> Center Of Our Universe.
//             </h2>
//             <p>
//               Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat.
//               Praesent eget varius ligula, malesuada eleifend purus. Aenean euismod est at mauris
//               mollis ultricies. Morbi arcu mi, dictum eu luala, dapibus interdum mollis.
//             </p>
//             <button>CONTACT US</button>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div className="slide">
//           <img src={image2} alt="Farmie" className="home-image1" />
//           <div className={`text-overlay ${animate ? "rise-up" : ""}`}>
//             <h2>
//               The Hearth Of The Farm Is The True <br /> Center Of Our Universe.
//             </h2>
//             <p>
//               Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat.
//               Praesent eget varius ligula, malesuada eleifend purus. Aenean euismod est at mauris
//               mollis ultricies. Morbi arcu mi, dictum eu luala, dapibus interdum mollis.
//             </p>
//             <button>CONTACT US</button>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };
// export default Alider;


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

