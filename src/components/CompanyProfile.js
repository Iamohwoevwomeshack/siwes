import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import { useState } from "react";

function CompanyProfile(){

    const year = new Date().getFullYear();

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }
    
    return(
    <div>
        <Header/>
        <CreateArea
            onAdd={addNote}
        />
        {notes.map((noteItem, index) => {
            return <Note 
                key={index}
                id={index}
                title={noteItem.title}
                email={noteItem.email}
                content={noteItem.content}
                address={noteItem.address}
                onDelete={deleteNote}
            />;
        })}


        <p className="company-footer">Copyright © {year}, University of Benin</p>
    </div>
    )
}

export default CompanyProfile;