import Header from "./Header";

function RecentPost(){

    const year = new Date().getFullYear();
    
    return(
    <div>
        <Header/>
        <div className="recent-post-container">
        <div>
            <h3>RecentPost</h3>
        </div>

        <div className="post-container">
        <h3>Posts</h3>
        <p/>
        </div>


        <p className="recent-profile-post">Copyright © {year}, University of Benin</p>
    </div>
    </div>
    )
}

export default RecentPost;