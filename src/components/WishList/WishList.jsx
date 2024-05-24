import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadWhishlistData } from '../../utils/localstorage';
import WishBook from '../WishBook/WishBook';
import { IoIosArrowDown } from 'react-icons/io';

const WishList = () => {
    const books = useLoaderData()
    const [wishList, setWishList] = useState([]);
    const [displayWishBooks, setDisplayWishBooks] = useState([]);

    const handleBookSort = (sorted) => {
        let sortedBooks = [];
        if (sorted === 'rating') {
            sortedBooks = [...wishList].sort((a, b) => b.rating - a.rating);
        } else if (sorted === 'pageNumber') {
            sortedBooks = [...wishList].sort((a, b) => b.totalPages - a.totalPages);
        } else if (sorted === 'publishYear') {
            sortedBooks = [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        setDisplayWishBooks(sortedBooks);
    };


    useEffect(() => {
        const storedReadWishBooks = getStoredReadWhishlistData();
        if (books.length > 0) {
            const wishBook = books.filter(book => storedReadWishBooks.wish.includes(book.bookId));
            setWishList(wishBook)
            setDisplayWishBooks(wishBook);
        }
    }, [books]);


    return (

        <div className='pl-5'>
            <div className="lg:text-right">
                <details className="dropdown">
                    <summary className="m-1 btn">Sort By<IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleBookSort('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBookSort('pageNumber')}><a>Number of pages</a></li>
                        <li onClick={() => handleBookSort('publishYear')}><a>Published year</a></li>
                    </ul>
                </details>
            </div>


            <div className='space-y-4 lg:py-10 py-5 px-5 lg:px-0'>
                {
                    displayWishBooks.map((wishBook, indx) => <WishBook key={indx} wishBook={wishBook}></WishBook>)
                }
            </div>
        </div>
    );
};



export default WishList;