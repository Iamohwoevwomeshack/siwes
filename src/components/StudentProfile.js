import Header from "./Header";
import Profile from "./profile";

function StudentProfile(){

    const year = new Date().getFullYear();
    
    return(
    <div className="student-profile-container">
        <Header/>
        <div className="student-heading">
            <h3>Student Info | Profile</h3>
            <p><a href="/recent-post">Find Company</a></p>
        </div>

        <div className="student-data-profile">
            <Profile/>
            <div className="student-data-profile-1">
                <div>
                    <h2>MAT NO:</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Password:</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Full Name:</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Department:</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>Level:</h2>
                    <input type="text" />
                </div>
                <div>
                    <h2>State of Origin:</h2>
                    <input type="text" />
                </div>
            </div>
        </div>

        <div className="student-profile-form">
        <p>Register Interest</p>
        <form  method="POST" >
                    <label>Full Name</label>
                    <input type="text" name="Name" placeholder="Name"/>
                    <label>Email</label>
                    <input type="email" name="Email" placeholder="Email"/>
                    <label>Message</label>
                    <textarea name="Message" cols="30" rows="5" placeholder="Message..."></textarea>
                    <button type="submit">Submit</button>
                </form>
        </div>

        <p>Copyright © {year}, University of Benin</p>
    </div>
    )
}

export default StudentProfile;