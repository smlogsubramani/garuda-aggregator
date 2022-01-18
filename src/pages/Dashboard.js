import React from 'react'
import Leftbox from '../components/Leftbox'
import Nav from '../components/Nav'
import Centerbox from '../components/Centerbox'
import Rightbox from '../components/Rightbox'
import Centerboxfour from '../components/Centerboxfour'
import Centerboxthree from '../components/Centerboxthree'

const dashboard = () => {
    return (  
        <div>
            
        <Nav/>
             <div class="space6"></div>
            <div class="row">
            <div class="col-lg-3">
                <Leftbox/>
                <div class="space6"></div>
                <Leftbox/>

            </div>
            <div class="col-lg-6">
                <Centerbox/>
                <div class="space6"></div>
                <Centerbox/>
                <div class="space6"></div>
                <Centerbox/>
                <div class="space6"></div>
                <Centerboxfour/>
                <div class="space6"></div>
                <Centerboxthree/>
                <div class="space6"></div>
                <Centerbox/>
                <div class="space6"></div>
                <Centerbox/>
                <div class="space6"></div>
                <Centerbox/>
                <div class="space6"></div>
                <Centerbox/>
                <div class="space6"></div>

            </div>
            <div class="col-lg-3">
                <Rightbox/>
                <div class="space6"></div>
                <Rightbox/>
                <div class="space6"></div>
                <Rightbox/>
                <div class="space6"></div>
                <Rightbox/>

            </div>
        </div>
        </div>
                
        

       
    
      
       
    )
}

export default dashboard
