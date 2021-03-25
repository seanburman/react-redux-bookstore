import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Books.css'
import { bookDeleted } from './booksSlice'
import { EditBook } from './EditBook'


export const BooksList = () => {
    //Local state toggles popup window for EditBook with selected
    //book id as props
    const [ editId, setEditId ] = useState();
    const books = useSelector(state => state.books)
    const dispatch = useDispatch()

    const onBookDelete = (e, id) => {
        //As surrounding Book div is clickable, prevent that click event
        e.stopPropagation()
        if (id) {
            dispatch(
                bookDeleted({
                    id
                })
            )
        }
    }

    //Current books on main page
    const renderedBooks = books.map(book => (
        <div className="books-list-container">
            <div className="book" key={book.id} onClick={() => setEditId(book.id)}>
                <h3 className="title">{book.name}</h3>
                <p>Category: {book.category}</p>
                <p>Price: ${book.price}</p>
                <button 
                    type="button" 
                    className="delete-button" 
                    onClick={(e) => onBookDelete(e, book.id)}>
                    Delete Book
                </button>
            </div>
        </div>
    ))

    //If all books are deleted, show this message
    const noBooks = (
        <React.Fragment>
        <h3>No Books Here :(</h3>
        <p>Please click 'Add Book' above to add a new book!</p>
        </React.Fragment>
    )
    return (
        <React.Fragment>
                {renderedBooks}
                {
                    renderedBooks.length === 0 && noBooks
                }
            {editId ? <EditBook id={editId} cancel={() => setEditId()}/> : null}
        </React.Fragment>
    )
}