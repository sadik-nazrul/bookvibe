import { useEffect, useState } from 'react';
import { getStoredReadWhishlistData } from '../../utils/localstorage';
import { useLoaderData } from 'react-router-dom';
import ReadBook from '../ReadBook/ReadBook';

const ReadBooks = () => {
    const books = useLoaderData()
    const [displayReadBooks, setDisplayReadBooks] = useState([])
    
    useEffect(() => {
        const storedReadWishBooks = getStoredReadWhishlistData();
        // console.log(storedReadWishBooks.read);
        if (books.length > 0) {
            const readBook = books.filter(book => storedReadWishBooks.read.includes(book.bookId));
            setDisplayReadBooks(readBook);
        }
    }, [books])

    return (
        <div className=' space-y-4 py-10'>
            {
                displayReadBooks.map((readbook, indx) => <ReadBook key={indx} readBook={readbook}></ReadBook>)
            }
            
        </div>
    );
};

export default ReadBooks;