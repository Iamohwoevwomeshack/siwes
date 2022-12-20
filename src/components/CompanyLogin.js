

function CompanyLogin(){

    const year = new Date().getFullYear();

    return(<div className="sign-in-container">
        <h2>COMPANY</h2>
        <div className="form-container">
            <p>LOGIN</p>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button><a href="/#">Login</a></button>
            </form>
        </div>
        <div className="forget-password">
            <p>Forget Password? <a href="/#">Recover Here</a></p>
            <p>New Here? <a href="/company-sign-up">SignUp</a></p>
        </div>
        <div className="back-to-homepage"><h3><a href="/">Back to Homepage</a></h3></div>
        
        <p className="sign-in-copyright">Copyright © {year}, University of Benin</p>
    </div>)
}

export default CompanyLogin;