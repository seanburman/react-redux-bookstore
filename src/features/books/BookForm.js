import React, { useEffect, useState } from 'react'
import '../../App.css'
import './Books.css'
import { useSelector } from 'react-redux'

//This for is reusable between AddBook and EditBook
export const BookForm = ({save, cancel, id=null, formTitle}) => {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(null)
    
    //Find book by id passed to form from EditBook
    const book = useSelector(state =>
        state.books.find(book => book.id === id)
    )

    const onNameChanged = (e) => setName(e.target.value)
    const onCategoryChanged = (e) => setCategory(e.target.value)
    const onPriceChanged = (e) => setPrice(e.target.value)

    //Pass book object back to AddBook or EditBook
    const handleSubmit = (e) => {
        e.preventDefault(); 
        save({name, category, price})
    }

    useEffect(() => {
        //If id is present, BookForm is using update operation
        if(book) {
        setName(book.name)
        setCategory(book.category)
        setPrice(book.price)
        }
    }, [book])

    return (
        <div className="popup-container">
            <div className="popup-item">
            <h2 className="title">{formTitle}</h2>
            <form className="book-form" onSubmit={handleSubmit}>
            <label htmlFor="bookName">Book Name:</label><br />
            <input
                type="text"
                id="bookName"
                name="bookName"
                value={name}
                onChange={onNameChanged}
                required
            /><br /><br />
            <label htmlFor="bookCategory">Category:</label><br />
            <input
                id="bookCategory"
                name="bookCategory"
                value={category}
                onChange={onCategoryChanged}
                required
            /><br /><br />
            <label htmlFor="bookPrice">Price:</label><br />
            <input
                id="bookPrice"
                name="bookPrice"
                type="number"
                min="0"
                step="any"
                value={price}
                onChange={onPriceChanged} 
                required
            /><br /><br />
            <div className="button-container">
                <button type="submit" className="save">Save</button>
                <button type="button" className="cancel" onClick={() => cancel()}>Cancel</button>
             </div>
            </form>
            </div>
        </div>
    )
}            
