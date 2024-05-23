import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className="py-10">
            <h2 className="lg:text-4xl text-xl font-semibold text-center pb-4">Books</h2>
            <div className="grid lg:grid-cols-3 gap-5">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;