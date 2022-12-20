import Header from "./Header";
import Footer from "./Footer";

function ComputerScienceCL(){
    return(
    <div>
    <Header/>
        <div className="computer-science-cl">
            <div className="computer-contact-container">
                <h3>Contact Us</h3>
                <p>Departments</p>
                <div>
                    <a href="/computer-science">Computer Science</a>
                    <a href="/mathematics">Mathematics</a>
                    <a href="/physics">Physics</a>
                    <a href="/chemistry">Chemistry</a>
                </div>
            </div>

            <div>
                <form action="https://formsubmit.co/ohwoevwomeshack@gmail.com" method="POST" className="computer-science-form" >
                    <label>Full Name</label>
                    <input type="text" name="Name" placeholder="Name"/>
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Name"/>
                    <label>Message</label>
                    <textarea name="Message" cols="30" rows="5" placeholder="Message..."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    
    <Footer/>
    </div>)
}

export default ComputerScienceCL;