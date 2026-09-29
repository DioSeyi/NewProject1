import '../components/MainBar.css';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";

const MainBar = () => {
  return (
  
        <div style={{backgroundColor:' rgba(243, 243, 243, 1)',width:'100%'}}>
 
           <div className='kkontainer'>
 
               <div className='hhcontent1'>
                 <h4>Welcome to  <span className="farmie-green">Farmie</span>, we hope you <span className='bbreakOnMobile'>will enjoy our products and have<span className='bbreakOnMobile'> good experience</span></span></h4> 
               </div>       
               
              <div className='hhcontent2'> 
 
                 <span className='bbreakOn'>
                     <p>
                       <MdOutlineMail className='mail' size={18}/> 
                       <span className='bbreakOnEmail2' >
                        Email:infodeercreative@gmail.com
                          {/* <span className='bbreakOnEmail1'>
                            infodeercreative@gmail.com
                          </span> */}
                       </span>
                     </p>
                             
                     <span className='bbreakOnEmail3'>
                      infodeercreative@gmail.com
                     </span>
                 </span>
       
                 <span className='bbreakOn'> 
                   <p><FaPhoneAlt className='phone' size={12}/>
                     <span className='bbreakOnEmail2'>
                       Call Us: +234 7063 989 071
                       {/* <span className='bbreakOnEmail2'>+234 7063 989 071
                       </span> */}
                     </span>
                   </p>
                 
                   <span className='bbreakOnEmail4'>+234 7063 989 071
                   </span>
               
                 </span>
               
               </div>      
 
           </div>
 
        </div>
     )
}

export default MainBar