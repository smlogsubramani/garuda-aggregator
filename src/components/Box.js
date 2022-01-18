import "./Box.css"
import Img from "./guide1.jpg"

const Box = () => {
    return (
    <div class="box">
        <div class="container">
        <div class="space1"> </div>
      
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                
                    <h1 class="heading1"> Get Started</h1>
                    <p class="sub-heading1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, animi?</p> 
                </div>            
            <div class="col-lg-3"></div>
            </div>
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="space3"></div>
                    <h3 class="heading2">Guide1</h3>
                    <p class="sub-heading2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione facere porro nemo. Aperiam amet exercitationem officia iure. Ullam modi assumenda laboriosam nobis magni excepturi pariatur saepe hic nam laborum.</p>
                    </div>             
                <div class="col-lg-6"> 
                <div class="space3"></div>                                 
                  <img  class="guide1-img"src={
                      Img
                  } alt="lol"/>
                </div>
            </div>
                  
            <div class="row">
                <div class="col-lg-6"> 
                    <div class="space3"></div>                                 
                    <img  class="guide1-img"src={
                      Img
                    } alt="lol"/>
                </div>
                <div class="col-lg-6">
                    <div class="space3"></div>
                    <h3 class="heading2">Guide2</h3>
                    <p class="sub-heading2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione facere porro nemo. Aperiam amet exercitationem officia iure. Ullam modi assumenda laboriosam nobis magni excepturi pariatur saepe hic nam laborum.</p>
                </div>             
                
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="space3"></div>
                    <h3 class="heading2">Guide3</h3>
                    <p class="sub-heading2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ratione facere porro nemo. Aperiam amet exercitationem officia iure. Ullam modi assumenda laboriosam nobis magni excepturi pariatur saepe hic nam laborum.</p>
                    </div>             
                <div class="col-lg-6"> 
                <div class="space3"></div>                                 
                  <img  class="guide1-img"src={
                      Img
                  } alt="lol"/>
                  <div class="space3"></div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Box
