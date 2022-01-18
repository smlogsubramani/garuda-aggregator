import "./Dbuserpayments.css"
import "./Dbuserpaymentsright"
import Dbuserpaymentsright from "./Dbuserpaymentsright"

const Dbuserpayments = () => {
    return (
        <div>
            {/* left box */}
           <div class="space6" ></div> 
            <h1 class="dbheading">PENDING VERIFICATION</h1>  
            <div class="container">
            <div class="row">
            <div class="col-lg-4">
            <div class="space6" ></div> 
                <div class="db-payment-left">
                    <div class="space5"></div>
                    <h6>HELP DESK</h6>
                    <p>Queries and FAQs here</p>
                </div>
            </div>
            <div class="col-lg-8">  
            <div class="space6" ></div>               
            <Dbuserpaymentsright/>
            </div>
            </div>    
            </div>  
           <div class="space2"></div>
        </div>
    )
}

export default Dbuserpayments
