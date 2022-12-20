import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    return(
    <div>
    <Header/>
        <div className="contact-container">
            <h3>Contact Us</h3>
            <p>Departments</p>
            <div>
                <a href="/computer-science">Computer Science</a>
                <a href="/mathematics">Mathematics</a>
                <a href="/physics">Physics</a>
                <a href="/chemistry">Chemistry</a>
            </div>
        </div>
    
    <Footer/>
    </div>)
}

export default Contact;