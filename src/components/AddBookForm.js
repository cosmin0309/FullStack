import React, {useState} from "react";
import { connect } from "react-redux";
import { addBook } from "../actions/booksActions";
import { useDispatch } from "react-redux";

const AddBookForm = () =>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleAddBook = () =>{
        dispatch(addBook({title, author}));
        setTitle('');
        setAuthor('');
    }
    return(
        <div>
            <h2>Add a book:</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <button onClick={handleAddBook}>Add book</button>
        </div>
        
    )
}

export default connect()(AddBookForm);