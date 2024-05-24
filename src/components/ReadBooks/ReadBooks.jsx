import { useEffect, useState } from 'react';
import { getStoredReadWhishlistData } from '../../utils/localstorage';
import { useLoaderData } from 'react-router-dom';
import ReadBook from '../ReadBook/ReadBook';
import { IoIosArrowDown } from "react-icons/io";

const ReadBooks = () => {
    const books = useLoaderData()
    const [readList, setReadList] = useState([]);
    const [displayReadBooks, setDisplayReadBooks] = useState([])

    // const handleBooksFilter = filter => {
    //     if (filter === 'rating') {
    //         const ratingBook = readList.filter(readBook => readBook.rating >= 4.5);
    //         setDisplayReadBooks(ratingBook);
    //     }
    //     else if (filter === 'pageNumber') {
    //         const pageNumBooks = readList.filter(readBook => readBook.totalPages >= 200);
    //         setDisplayReadBooks(pageNumBooks);
    //     }
    //     else if (filter === 'publishy') {
    //         const publishyBooks = readList.filter(readBook => readBook.yearOfPublishing >= 1900);
    //         setDisplayReadBooks(publishyBooks);
    //     }
    // }


    const handleBookSort = (sorted) => {
        let sortedBooks = [];
        if (sorted === 'rating') {
            sortedBooks = [...readList].sort((a, b) => b.rating - a.rating);
        } else if (sorted === 'pageNumber') {
            sortedBooks = [...readList].sort((a, b) => b.totalPages - a.totalPages);
        } else if (sorted === 'publishYear') {
            sortedBooks = [...readList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        setDisplayReadBooks(sortedBooks);
    };


    useEffect(() => {
        const storedReadWishBooks = getStoredReadWhishlistData();
        // console.log(storedReadWishBooks.read);
        if (books.length > 0) {
            const readBook = books.filter(book => storedReadWishBooks.read.includes(book.bookId));
            setReadList(readBook)
            setDisplayReadBooks(readBook);
        }
    }, [books]);

    return (
        <div>
            <div className="text-right">
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
                    displayReadBooks.map((readbook, indx) => <ReadBook key={indx} readBook={readbook}></ReadBook>)
                }

            </div>
        </div>
    );
};

export default ReadBooks;