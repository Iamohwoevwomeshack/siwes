import Header from "./Header";
import Footer from "./Footer";

import bkg2 from "../images/bkg-3.png";
import img1 from "../images/img-1.png";

function Courses(){
    return(<div>
    <Header/>
    <div className="courses-container">
        <p className="courses-paragraph">DISCIPLINES/COURSES APPROVED FOR SIWES</p>
        <ul>
        <li>Agriculture</li>
        <li>Education</li>
        <li>Engineering and Technology</li>
        <li>Environmental Sciences</li>
        <li>Medical Sciences</li>
        <li>Sciences</li>
        <li>Veterinary Medicine</li>
    </ul>
    <a href="https://www.siwes.itf.gov.ng/Identity/LandingPage/courseland" className="courses-link">Learn More...</a>
    </div>
    
    <div className="courses-img">
        <img src={bkg2} alt="img" className="img1" />
        <img src={img1} alt="img" className="img2" />
    </div>
    <Footer/>
    </div>)
}

export default Courses;