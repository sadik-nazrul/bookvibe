import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadWhishlistData } from '../../utils/localstorage';
import WishBook from '../WishBook/WishBook';

const WishList = () => {
    const books = useLoaderData()
    const [displayWishBooks, setDisplayWishBooks] = useState([])
    useEffect(() => {
        const storedReadWishBooks = getStoredReadWhishlistData();
        // console.log(storedReadWishBooks.read);
        if (books.length > 0) {
            const wishBook = books.filter(book => storedReadWishBooks.wish.includes(book.bookId));
            setDisplayWishBooks(wishBook);
        }
    }, [books])
    return (
        <div className='space-y-4 lg:py-10 py-5 px-5 lg:px-0'>
            {
                displayWishBooks.map((wishBook, indx) => <WishBook key={indx} wishBook={wishBook}></WishBook>)
            }
        </div>
    );
};



export default WishList;