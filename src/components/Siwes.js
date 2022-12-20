import Corporate from "../images/CORPORATE-ENVIRONMENT.jpg";
import Field from "../images/FIELD-EXPERIENCE.jpg";
import Network from "../images/NETWORKING.jpg";
import Practical from "../images/PRACTICAL-KNOWLEDGE.jpg";
import Skill from "../images/SKILL-DEVELOPMENT.jpg";
import Synergy from "../images/SYNERGY.jpg";
import Header from "./Header";
import Footer from "./Footer";

function Siwes(){
    return(<div>
    <Header/>
    <p className="siwes-title">SIWES OBJECTIVES</p>
        <div className="siwes-container">
                <div>
                <ul>
                    <div className="siwes-list-1">
                    <img src={Skill} alt="img" className="img-1" />
                    <li><span>Skills Development: </span>
                        Provide an avenue for students in institutions of higher learning to acquire industrial skills and experience in their course of study.</li>
                    </div>
                    <div className="siwes-list-1">
                    <img src={Practical} alt="img" className="img-2" />
                    <li><span>Practical Knowledge: </span>
                        Expose students to work methods and techniques in handling equipment and machines that may not be available in their institutions</li>
                    </div>
                    <div className="siwes-list-1">
                    <img src={Corporate} alt="img" className="img-3" />
                    <li><span>Corporate Environment: </span>
                        Prepare students for Industrial Work situation they are to meet after graduation.</li>
                    </div> 
                </ul>
                </div>

                <div>
                <ul>
                    <div className="siwes-list-2">
                    <img src={Network} alt="img" className="img-4" />
                    <li><span>Networking: </span>
                        Make transition from school to the world of work easier and enhance students’ contacts for later job placement.</li>
                    </div>
                    <div className="siwes-list-2">
                    <img src={Field} alt="img" className="img-5" />
                    <li><span>Field Experience: </span>
                        Provide Students with an opportunity to apply their knowledge in real work situation, thereby bridging the gap between theory and practice.</li>
                    </div>
                    <div className="siwes-list-2">
                    <img src={Synergy} alt="img" className="img-6" />
                    <li><span>Synergy: </span>
                        Enlist and strengthen employers’ involvement in the entire educational process</li>
                    </div> 
                </ul>
                </div>
        </div>

        <div className="siwes-mission">
            <div className="siwes-mission-1">
                <p>SIWES MISSION</p>
                <h4>To Set, Regulate Training Standards And Provide Need-Based Human Capital Development Interventions Using A Corps Of Highly Competent Professionals In Line With Global Best Practices.</h4>
            </div>

            <div className="siwes-mission-2">
                <p>SIWES VISION</p>
                <h4>
                    To Be The Leading Skills Training Organisation In Nigeria And One Of The Best In The World.
                    To Be The Leading Human Capital Development Organisation In Nigeria And One Of The Best In The World.</h4>
            </div>
        </div>
        <Footer/>
</div>)
}

export default Siwes;
