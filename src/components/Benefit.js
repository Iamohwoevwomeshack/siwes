import Header from "./Header";
import Footer from "./Footer";
import img1 from "../images/img-1.png";

function Benefit(){
    return(
    <div>
    <Header/>
        <div className="benefit-1">
            <h3>SIWES BENEFITS FOR INDIVIDUAL STUDENTS</h3>
            <p>Some of the Benefits of Industrial Training to Students.</p>
            <ul>
                <li>Industrial training is provided to the students so that they are capable to implementing the subjects practically.</li>
                <li>It also helps the student in improving their knowledge.</li>
                <li>It improves the versatility of the student and helps them in boosting their career</li>
                <li>It also boosts their confidence once they have the skills about the particular subject they have got training in.</li>
                <li>They help you implementing the theory into realistic area.</li>
                <li>Familiarize them with the environment of the companies.</li>
                <li>They help the students to increase communication level as well as develop leadership qualities.</li>
                <li>The students are provided training from the industry professionals who have assortment of knowledge in working in live projects.</li>
            </ul>
        </div>

        <div className="benefit-2">
            <h3>SIWES BENEFITS FOR SCHOOLS</h3>
            <p>Some of the Benefits of industrial Training to institutions.</p>
            <ul>
                <li>The Industrial training complements the theoretical knowledge imparted to the students while in the school.
                    In so doing a comprehensive trainings provided for the stucunts as they can blend theory with practico This is an important bonolit to the institution. Aller all the performance of the students after graduation wit
                    be a crade (or discredit) to the institution the trains them.</li>
                <li className="benefit-purple">While on industrial training, students are able to put into practice a lot of the theoretical work aready done in school. In many cases equipment that may be lacking or in inadequate supply in the insitution (as is
                    presently the case in Nigeria) are put at the disposal of the students. Hence they become more informed and facilitate the teaching work of the teachers on return to school.</li>
                <li>The teachers as well as the industrial coordinators visit the students while on industral training, Such visite
                    are mosty of great benefits to the institution staff as they also have opportunities of coming in close contact
                    with the real operations and discussions with incunt staas wail, could help in updating their teaching
                    and research work.</li>
                <li className="benefit-purple">Opportunities of alone collaboration between the instution and the industry arise through the scheme
                    Hernce industiles could discover the potentials of departments and expertise in an insitution. This could
                    lead to further collaborations such as consultancy wake, endowment of chair, buildings, of Provision of
                    research grants and organization of short course, seminars, workshops, etc.</li>
                <li>The scheme provides students the opportunity to apply the theoretical principles taught in school on real job situation. This leads to better understanding of the subjects.</li>
                <li className="benefit-purple">It affords them the opportunity to interact with a larger spectrum of people in industrial set up which
                    different from campus fe. Hence this helps personally and maturity development.</li>
                <li>It enables the students prepare themselves for the future world of work. The test of the pudding is in the euung. Hence this is an opportunity to poop into the future and determine how much they are ready for it.</li>
                <li className="benefit-purple">The scheme helps the students in devopro talectual salts as they are chim ch on their own to take technical decisions and often analyze complex intercenclinary problems and profter appropriate solutions applicable to real situation.</li>
            </ul>
        </div>
        <div className="benefit-img">
        <img src={img1} alt="Img" />
        </div>
        <Footer/>
    </div>
    )
}

export default Benefit;