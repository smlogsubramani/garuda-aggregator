import "./Dbuserprofile.css"

const Dbuserprofile = () => {
    return (
        <div >
            <div class="space6" ></div>
            
           
            <h1 class="dbheading">Profile</h1>    
           <div class="space2"></div>
           <div class="container" >
           <div class="row">  
                      
               <div class="col-lg-6">
                   <div class="space6"></div>
                    <div class="p-info ">
                    <h2 class="subtitle">PERSONAL INFORMATION</h2>
                    <div class="space6"></div>
                    <legend class="legend">Store Name</legend>
                    <input type="text" class="try"  placeholder= " &#xf2b9; GARUDA SHOP"   />
                    <br></br>
                    <legend class="legend">Address</legend>
                    <input type="text" class="try" placeholder= " &#xf2b9; No 12 Garuda nagar, Garuda"  />
                    <div class="row">
                    <legend class="legend">Owner Details</legend>
                    <div class="col-lg-6 ">
                    
                    <input type="text" class="try" placeholder= " &#xf2b9; owner name"  />
                    </div>
                    <div class="col-lg-6 a">   
                                     
                    <input type="text" class="try" placeholder= " &#xf2b9; owner contact"  /> 
                    </div>
                    </div>
                    <div class="row">
                    <legend class="legend">Manager</legend>
                    <div class="col-lg-6 ">
                   
                    <input type="text" class="try" placeholder= " &#xf2b9; Shop Manager"  />
                    </div>
                    <div class="col-lg-6 a">
                    
                    <input type="text" class="try" placeholder= " &#xf2b9; Manager contact"  /> 
                    </div>
                    </div>
                    <div class="space2"></div>
                    <h2 class="subtitle">LINKED ACCOUNTS</h2>
                   
                    
                    <input type="text" class="try" placeholder= " &#xf2b9; BANK ACCOUNT HOLDER"   />
                    <br></br>
                   
                    <input type="text" class="try" placeholder= " &#xf2b9; BANK ACCOUNT NO"   />
                    <br></br>
                    <button class="db-button">Change Bank Account</button>                   
                    </div>
               </div>
               <div class="col-lg-6">
               <div class="space6"></div>
               <div class="p-info ">
               <h2 class="subtitle">ACCOUNT INFORMATION</h2>
               <div class="space6"></div>
               <legend class="legend">Email</legend>
               <input type="text" class="try" placeholder= " &#xf2b9; email@here.in"   />
               <br></br>
               <legend class="legend">Primary phine number</legend>
               <input type="text" class="try" placeholder= " &#xf2b9; 1234567890 "   />
               <br></br>
               <legend class="legend">Secondary phone number</legend>
               <input type="text" class="try" placeholder= " &#xf2b9; 1234567890"   />
               <br></br>
               <legend class="legend">New password</legend>
               <input type="text" class="try" placeholder= " &#xf2b9; New password"   />
               <br></br>
               <legend class="legend">Confirm password</legend>
               <input type="text" class="try" placeholder= " &#xf2b9; Confirm password"   />
               <br></br>

                <button class="chpswd">Change password</button>
               </div>
               </div>
               </div>
               </div>
         
           
        </div>
    )
}

export default Dbuserprofile
