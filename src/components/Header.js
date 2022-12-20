import {useState} from "react"
import unibenLogo2 from "../images/uniben-logo-2.png";

function Header(){

    const [activeHam, setAtiveHam] = useState(false);

    const menuItems = (
        <>
            <a href="/">Home</a>
            <a href="/study-features">Benefit</a>
            <a href="/study-programs">Courses</a>
            <a href="/about">SIWES</a>
            <a href="/sign-in" id="sign-in">Sign In</a>
            <a href="/sign-up" id="sign-up">Sign Up</a>
        </>
    )

    return(<div className="navbar-container">
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                <img src={unibenLogo2} alt="Img" />
                </div>
                <div className="nav-menu">
                    {menuItems}
                </div>
                <button className={activeHam ? "hambuger active-hamburger" : "hambuger"} onClick={() => setAtiveHam(!activeHam)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
        {activeHam && <div className="nav-dropdown">{menuItems}</div>}
    </div>)
}

export default Header;