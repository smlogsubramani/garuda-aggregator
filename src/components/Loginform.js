import "./Loginform.css"
import Imge from './logo.png'

const Loginform = () => {
    return (
        <div>
           <div class=" container">
               <div class="row">
                   <div class="col-lg-4"></div>
                   <div class="col-lg-4">
                   <img  class="logo-png center"src={Imge} alt="lol"/>
                   <div class="space"></div>
                    <div class="login-form ">
                   <label>Email</label>
                   <input type="text" placeholder=""  size="40"/>
                   <div class="space1"></div>
                   <label>Password</label>
                   <input type="text" placeholder=""  size="40"/>
                   <div class="space"></div>                  
                   <button class="butn" >Login</button>
               </div>
               </div>
               <div class="col-lg-4"></div>
               </div>
           </div>
        </div>
    )
}

export default Loginform
