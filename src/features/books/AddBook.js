import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { bookAdded } from './booksSlice'
import '../../App.css'
import './Books.css'
import { BookForm } from './BookForm'

export const AddBook = () => {
    //Local state toggles popup for adding new book
    const [ addBook, setAddBook ] = useState(false);
    const dispatch = useDispatch()

    const onBookSave = (book) => {
        let { name, category, price } = book
        if (name && category && price) {
            dispatch(
                bookAdded({
                    id: v4(),
                    name,
                    category,
                    price
                })
            )
        }
        //Closes add book popup
        setAddBook(false)
    }

    return (
        <React.Fragment>
        <button type="button" onClick={() => setAddBook(true)}>Add Book</button>
        { addBook &&
            <BookForm 
                save={((book) => onBookSave(book))} 
                cancel={() => setAddBook(false)}
                formTitle="Add a Book"
            />
        }
        </React.Fragment>
    )
}