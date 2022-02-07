import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookForm() {
    const {addBook} = useContext(BookContext)
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        addBook(title,author)
        setTitle('')
        setAuthor('')
    }
  return(
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder='author' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <input type="submit" value="add book"/>
    </form>
  );
}

export default BookForm;
