import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App(){

    const [notes, setNotes] = React.useState([])
    function addNote(note)
    {
        setNotes
        (prev=>
            {
                return [
                    ...prev,
                    note
                ]
            })
    }

    function DelNote(id)
    {
        setNotes(prev => {
            return prev.filter((item,index)=>{
                return index !== id;
            })
        })
    }

    return <div>
    <Header></Header>
    <CreateArea
        onAdd={addNote}
    ></CreateArea>
    {notes.map((item,index)=>
    {
        return <div style={{marginRight:"20px"}}>
        <Note
        id={index}
        key={index}
        title={item.title} 
        content={item.content}
        onDelete={DelNote}>
        </Note>
        </div>
    })}
    <Footer></Footer>
    </div>
}

export default App;