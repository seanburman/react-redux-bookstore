import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: "b1c21c20-a7ab-404b-ac54-437534aa05e4", name: "Cosmos", price: 19.99, category: "Non-Fiction"},
    { id: "b1c21c20-a7ab-404b-ac54-987dasa305ed", name: "Wind in the Willows", price: 9.99, category: "Fiction" }   
]

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        //Create book
        bookAdded(state, action) {
            state.push(action.payload)
        },
        //Delete book
        bookDeleted(state, action) {
            let filtered = state.filter(item => item.id !== action.payload.id)
            return filtered
        },
        //Update book
        bookUpdated(state, action) {
            const { id, name, category, price } = action.payload
            const currentBook = state.find(book => book.id === id)
            if (currentBook) {
                currentBook.name = name
                currentBook.category = category
                currentBook.price = price
            }
        }
    }
})

export const { bookAdded, bookDeleted, bookUpdated } = booksSlice.actions

export default booksSlice.reducer