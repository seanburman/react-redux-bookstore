import React from "react"
import { AddBook } from "./features/books/AddBook"
import { BooksList } from "./features/books/BooksList"
import './App.css'

//This app component displays a list of books kept in the redux store
//with CRUD functionality for each book.
function App() {

    return (
      <div className="main">
        <h1>Sean's Bookstore</h1>
        <AddBook />
        <BooksList />
      </div>
    )
  }
  
  export default App