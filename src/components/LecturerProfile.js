import Header from "./Header";

function LecturerProfile(){

    const year = new Date().getFullYear();
    
    return(
    <div className="lecturer-background">
        <Header/>
        <div className="lecturer-container">
            <h3>Lecturer</h3>
            <div className="number-count-container">
                <div><p className="number-of-interns">Number of Interns</p><button className="lecturer-span-1"/></div>
                <div><p className="number-of-companies">Number of Companies</p><button className="lecturer-span-2"/></div>
            </div>
        </div>

        <div className="lectuer-file-upload">
            <input type="file" />
            <div>
            <label className="lectuer-label-1">Download</label>
            <label className="lectuer-label-2">Delete</label>
            </div>
        </div>


        <p className="lecturer-copyright">Copyright © {year}, University of Benin</p>
    </div>
    )
}

export default LecturerProfile;