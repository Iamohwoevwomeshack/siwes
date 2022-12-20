function Note(props){

    
    function handleClick(){
        props.onDelete(props.id)
    }



    return(
        <div id="company-flex-direction">
        <div className="company-profile-note-container">
            <div className="links-container">
                <h3>{props.title}</h3>
                <div>
                    <p>{props.email}</p>
                    <p>{props.address}</p>
                </div>
            </div>
            <p className="company-content">{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
        </div>
    )
}

export default Note;