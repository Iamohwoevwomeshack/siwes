

function LecturerSignUp(){

    const year = new Date().getFullYear();

    return(<div className="sign-in-container">
        <h2>LECTURER</h2>
        <div className="form-container">
            <p>SIGN UP</p>
            <form id="company-register-form">
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button><a href="/#">sign up</a></button>
            </form>
        </div>
        <div className="forget-password">
            <p>Forget Password? <a href="/#">Recover Here</a></p>
            <p>Already Registered? <a href="/lecturer-sign-in">Sign In</a></p>
        </div>
        <div className="back-to-homepage"><h3><a href="/">Back to Homepage</a></h3></div>
        
        <p className="sign-in-copyright">Copyright © {year}, University of Benin</p>
    </div>)
}

export default LecturerSignUp;