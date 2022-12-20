import Header from "./Header";
import Footer from "./Footer";
import bkg3 from "../images/bkg-3.png";

function Home(){
    return(
        <div className="home-container">
            <Header/>
            <div className="img-container">
            </div>
            <div className="definition">
                <div className="definition-1">
                    <h3>SIWES</h3>
                    <p>The Students Industrial Work Experience Scheme (SIWES) 
                    is a skills training programme designed to expose and 
                    prepare students of universities and other tertiary 
                    institutions for the Industrial Work situation they are 
                    likely to meet after graduation.
                    </p>
                </div>
                <div className="definition-2">
                    <h3>Industrial Training</h3>
                    <p>Industrial Training is on the job training or before the job training
                        designed to provide technical skills, work ethics and industry 
                        experience in a course field or course program You must have 
                        heard about internships or industry experience, which takes about 3-6 
                        months to complete or sometimes even more. Industrial Training or 
                        Internship is the organized way of improving and enhancing knowledge 
                        and skill set of both students and graduates in a particular field of study 
                        to properly position them and prepare them practically for the real jobs.
                    </p>
                </div>
            </div>
            <div className="home-benefit-container">
                <div className="home-benefit">
                    <div>
                        <p>Benefit of Industrial Training</p>
                        <ul>
                            <li>Optimal Performance</li>
                            <li>Gain Mastery</li>
                            <li>Employabaty Skills</li>
                            <li>Trend Awareness</li>
                            <li>Hands On Experience</li>
                            <li>Self-Confidence</li>
                            <li>Work Ethics</li>
                            <li>Job Opportunity</li>
                            <li>Career Advancement</li>
                        </ul>
                    </div>
                    <img src={bkg3} alt="Img"/>
                </div>
            </div>
            <div className="definition-container">
                <h4>Optimal Performance</h4>
                <p>Industrial training boosts the performance of 
                    students and helps them to meet career objectives andcurrent industry 
                    demands.</p>
                <h4>Gain Mastery</h4>
                <p>It helps students to update and master their skills. 
                    If they are not aware of new concepts and technology.the industrial training 
                    program lets them master the latest advancements. It not only builds confidence
                    but also helps in taking up complicated projects easly</p>
                <h4>Employabaty Skills</h4>
                <p>Industrial training program is always a comprehensive practical
                    leaming opportunity and platform forstudents to improve their employability skills. 
                    They would become well prepared for the job and getsufficient real corporate 
                    exposure</p>
                <h4>Trend Awareness</h4>
                <p>The industrial training program improves students 
                    and graduates awareness in a particular field ortechnical part of a field in order 
                    to stay refreshed and updated</p>
                <h4>Hands On Experience</h4>
                <p>The leamers can obtain hands-on expenence and know the 
                    real job scenario. It cultivates the leadershipability of the students and gives them 
                    the responsibility to execute and perform the given task</p>
                <h4>Self-Confidence</h4>
                <p>Industrial training helps in increasing self-confidence at work place 
                    and identifying their own core proficiency in a team, it cultivates the leadership ability 
                    of the students and gives them the energyrequired to execute and perform the given task.</p>
                <h4>Work Ethics</h4>
                <p>Work ethics are the behavioural skills and set of moral principles a person 
                    uses in their job to function effectively in a team. Students and Graduates who takes an 
                    industrial training will develop work ethics and maturity to handle various responsibilities 
                    in any organization</p>
                <h4>Job Opportunity</h4>
                <p>Students and Graduates who completes an industnal 
                    raining program has proven to have higherchances of job retention and job placements than 
                    those who never attended</p>
                <h4>Career Advancement</h4>
                <p>With industrial training you possess the 
                    necesary skill set and experience and updated work ethics tosoar higher in your career.</p>
            </div>

            <div className="notice-container">
                <h3>Notice:</h3>
                <h4>
                    YOU MUST BE A STUDENT OF THE UNIVERSITY OF BENIN TO 
                    AUTOMATICALLY QUALIFY FOR OUR INDUSTRIAL TRAINING.</h4>
                <p>To Register interest to any Company of your choice, Simply Login to the <span className="notice-blue">Student Portal, 
                    Find Company </span>and<span className="notice-blue"> Apply.</span></p><br/>
                <button><a href="/#">APPLY FOR INDUSTRIAL TRAINING</a></button>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
