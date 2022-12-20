import siwes from "../images/siwes-logo.png";

function SignUp(){

    const year = new Date().getFullYear();

    return(<div className="sign-in-container">
        <img src={siwes} alt="img" />
        <div className="form-container">
            <p>SIGN UP</p>
            <form id="sign-up-form">
                <input type="text" placeholder="MAT NO."/>
                <input type="password" placeholder="Password"/>
                <input type="text" placeholder="Name of student"/>
                <input type="text" placeholder="Your discipline"/>
                <input type="text" placeholder="Level"/>
                <input type="email" placeholder="email"/>
                <button><a href="/#">Register</a></button>
            </form>
        </div>
        <div className="forget-password">
            <p>Aready Registered? <a href="/sign-in">Sign In</a></p>
            <p>New Here? <a href="/#">Register</a></p>
        </div>
        <div className="back-to-homepage"><h3><a href="/">Back to Homepage</a></h3></div>
        
        <p className="sign-in-copyright">Copyright © {year}, University of Benin</p>
    </div>)
}

export default SignUp;