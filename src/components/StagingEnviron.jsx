import "../components/StagingEnviron.css";
import image19 from '../assets/grassable.png';
import image9 from '../assets/flower.png';
import image14 from '../assets/flower1.png';
import image15 from '../assets/cabagess.png';

const StagingEnviron = () => {
  // return (
  //   <>
  //     <div className="nithsection-wrapper" >
  //       <div className='nithsection'> 
  //         <p>
  //           What we do
  //         </p>
  //         <h2>
  //           Our Produce Is Mainstay For Us
  //         </h2>
  //         <img src={image14} alt='Farmie' style={{padding:'15px 0 50px'}} />

  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at diam convallis ligula cursus bibendum sed at enim. Class aptent taciti <br/> sociosqu ad litora torquent conubia nostra, per inceptos himenaeos.
  //         </p>

  //         <div  className='searchBTN'>       
  //           <input className='inputfield' type="email" minLength={9} maxLength={50} placeholder="Enter your email"/>
  //           <button className="my-btn" type="submit" >SUBSCRIBE</button>
  //         </div>
  //       </div>  
        
  //       <img src={image15} alt='cabage' className='carousel-text5' />         
  //     </div>
  //   </>
  // )
  // return (
    <>
      {/* <div className="cover">

      <div className="col-lg-6 col-md-6 hero-content ">
        <div className="row align-items-center hero-section">
          <h1>Post on <span className="change">18 Aug 2018</span> / <span className="change1">Carlos Bacca</span></h1>
          <p>Why innovation is key to maintaining<br/>our export market share</p>
        </div>
      </div>
        

        <div className="col-lg-6 col-md-6 ">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="mb-4 step1">
              <p style={{ margin: '5px 20px', fontSize: '11px', color: 'rgba(196, 189, 189, 1)' }}>
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

      </div> */}
    </>    
  // )

  return (
    <>
      <div className="containa1">

        <div className="left1">
          <div className='container' style={{display:'flex',flexDirection:'column',width:'50%',marginTop:'150px',marginLeft:'70px'}}> 
              <div style={{display:'flex',flexDirection:'column', gap:'27px'}}>

                <div style={{marginLeft:'10px',gap:'10px',display:'flex',flexDirection:'column',alignItems:'start'}}>
                  <h5 style={{color:'rgb(150, 140, 140)'}}>Contact now</h5>
                  {/* <br /> */}
                  <h2 className='aboutus1'><span className='farmie-green1'>Get In Touch</span> With Us</h2>
                  <img src={image9} alt='flower'/>
                </div>

                <div className='emailName'>
                  <input className='InputName' type="text" minLength={9} maxLength={50} placeholder="Your Name"/>

                  <input className='InputName' type="text" minLength={9} maxLength={50} placeholder="Your Email"/>         
                </div>

                <input className='InputName1' type="text" minLength={9} maxLength={50} placeholder="Your Subject"/> 
              
               
                {/* <div class="parent-container">  */}
                <textarea className='InputName2' type="text" minLength={0} maxLength={1000} placeholder="Your Message"/>

                <button className="my-btn1" type="submit" >SEND MESSAGE</button>
                {/* </div> */}
              </div>                       
          </div>         
        </div>
        
        <div className="right1">         
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126839.06821658298!2d3.3488896!3d6.5568768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1755364284603!5m2!1sen!2sng"
            style={{width:"540px" ,height:"480px",border:"0",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",cursor:'pointer'}}>
          </iframe>
        </div>

      </div>
    </>    
  )
}

export default StagingEnviron

