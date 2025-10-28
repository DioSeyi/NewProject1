import '../components/MainBar.css';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";

const MainBar = () => {
  return (
    <> 
     <div style={{backgroundColor:' rgba(243, 243, 243, 1)',width:'100vw'}}>
      <div className='kontainer'>
        <div className='hcontent1'>
          <h4>Welcome to  <span className="farmie-green">Farmie</span>, we hope you <span className='breakOnMobile'>will enjoy our products and have<span className='breakOnMobile'> good experience</span></span></h4> 
        </div>       
        
        <div className='hcontent2'>

         <span className='breakOn'> <p><MdOutlineMail className='mail' size={18} /> 
          <span className='breakOnEmail2' >Email: <span className='breakOnEmail1'>infodeercreative@gmail.com</span></span></p>
          
          <span className='breakOnEmail3'>infodeercreative@gmail.com
          </span>
          
          </span>

        <span className='breakOn'> <p><FaPhoneAlt className='phone' size={12}/> <span className='breakOnEmail2' >Call Us:<span className='breakOnEmail2'> +234 234 706 398 9071</span></span></p>
          
          <span className='breakOnEmail4'>+234 706 398 9071
          </span>
         
        </span>
         
        </div>         
      </div>

      {/* <div className='mobile'>
        <h1>Hello</h1>
      </div> */}
     </div>


    </>
  )
}

export default MainBar