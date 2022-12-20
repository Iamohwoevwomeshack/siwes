import { useState } from "react";

function CreateArea(props){

    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        email: "",
        content: "",
        address: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        })
    };

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            email: "",
            content: "",
            address: ""
        })

        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return(
        <div>
            <form className="company-profile-container">
                    {isExpanded && <input 
                    type="text" 
                    name="title" 
                    value={note.title} 
                    placeholder="Company's Name"
                    onChange={handleChange}
                    required
                    />}

                    {isExpanded && <input 
                    type="text" 
                    name="email" 
                    value={note.email} 
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    />}

                    {isExpanded && <input 
                    type="text" 
                    name="address" 
                    value={note.address} 
                    placeholder="Website/Company Address"
                    onChange={handleChange}
                    required
                    />}

                    <textarea 
                    type="text" 
                    name="content" 
                    value={note.content} 
                    placeholder="Take a note..."
                    onClick={expand}
                    onChange={handleChange} 
                    rows={isExpanded ? 4 : 1}  
                    required                 
                    />
                    
                    {isExpanded && <button onClick={submitNote}>+</button>}
            </form>
            <div className="company-line"></div>
        </div>
    )
}

export default CreateArea;