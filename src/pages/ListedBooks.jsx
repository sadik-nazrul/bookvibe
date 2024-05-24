import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
// import { getStoredReadWhishlistData } from "../utils/localstorage";


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)

    // const books = useLoaderData()
    // const [readList, setReadList] = useState([])


    // useEffect(() => {
    //     const storedReadWishBooks = getStoredReadWhishlistData();
    //     // console.log(storedReadWishBooks.read);
    //     if (books.length > 0) {
    //         const readBook = books.filter(book => storedReadWishBooks.read.includes(book.bookId));
    //         setReadList(readBook)
    //     }
    // }, [books])


    return (
        <div className='container mx-auto'>
            <div className="h-40 bg-slate-200 flex justify-center items-center m-5 lg:m-0 rounded-xl lg:mb-4">
                <h2 className="text-xl lg:text-3xl font-semibold">Listed Books</h2>
            </div>


            <div className="flex justify-between items-center">

                {/* Tab */}
                <div className="flex items-center m-5 lg:m-0 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                    <Link className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                        onClick={() => setTabIndex(0)}
                        to='readlist'
                    >
                        <span>Read Books</span>
                    </Link>
                    <Link className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                        onClick={() => setTabIndex(1)}
                        to='wishlist'
                    >
                        <span>Wishlist Books</span>
                    </Link>
                </div>

                {/* <div className="text-right">
                    <details className="dropdown">
                        <summary className="m-1 btn">Sort By<IoIosArrowDown></IoIosArrowDown></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Rating</a></li>
                            <li><a>Number of pages</a></li>
                            <li><a>Published year</a></li>
                        </ul>
                    </details>
                </div> */}


            </div>

            <Outlet />
        </div>
    );
};

export default ListedBooks;