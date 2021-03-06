import React from "react";
import PlusOneIcon from '@material-ui/icons/PlusOne';

function CreateArea(props) {

    const [note , setNote] = React.useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name , value} = event.target;
        setNote(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
    }

    return (
        <div>
        <form className="create-note">
            <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
            <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
            <button onClick={submitNote}><PlusOneIcon></PlusOneIcon></button>
        </form>
        </div>
    );
}

export default CreateArea;
