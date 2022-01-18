import "./Testimonials.css"
import Img from "./guide1.jpg"

const Testimonials = () => {
    return (
        <div class="container">
        <div class="space"></div>
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
            <h2 class="heading"> testimonials/news</h2>
            <p class="sub-heading"> Magna adipisicing enim culpa excepteur occaecat ipsum duis aute non est esse sunt.</p>
            
            </div>
            <div class="col-lg-3"></div>
        </div>
        <div class="space1"> </div>
        <div class="row">
            <div class="col-lg-4">
                <img  class="guide2-img"src={
                      Img
                     } alt="lol"/>
                     <h2 class="testimonial-heading">lorem ipsium</h2>
                <p class="testimonial-txt">Magna adipisicing enim culpa excepteur occaecat ipsum duis aute non est esse sunt</p>
            </div>
            <div class="col-lg-4">
                <img  class="guide2-img"src={
                      Img
                     } alt="lol"/>
                     <h2 class="testimonial-heading">lorem ipsium</h2>
                <p class="testimonial-txt">Magna adipisicing enim culpa excepteur occaecat ipsum duis aute non est esse sunt</p>
            </div>
            <div class="col-lg-4">
                <img  class="guide2-img"src={
                      Img
                     } alt="lol"/>
                     <h2 class="testimonial-heading">lorem ipsium</h2>
                <p class="testimonial-txt">Magna adipisicing enim culpa excepteur occaecat ipsum duis aute non est esse sunt</p>
            </div>

        </div>
        
        


        </div>
    )

    }
export default Testimonials
