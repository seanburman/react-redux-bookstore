import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BookForm } from './BookForm'
import { bookUpdated } from './booksSlice'
import './Books.css'

export const EditBook = ({id, cancel}) => {
    const dispatch = useDispatch()
    const book = useSelector(state =>
        state.books.find(book => book.id === id)
    )

    //Where a book has been edited, dispatch update changes
    const onBookEdit = (book) => {
        let { name, category, price } = book
        if (name && category && price) {
            dispatch(
                bookUpdated({
                    id,
                    name,
                    category,
                    price
                })
            )
        }
        cancel()
    }

    return (
        <React.Fragment>
            <BookForm 
                save={((book) => onBookEdit(book))} 
                cancel={() => cancel()}
                id={book.id}
                formTitle="Edit Book"
            />
        </React.Fragment>
    )
}