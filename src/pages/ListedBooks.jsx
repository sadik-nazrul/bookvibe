import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import ReadBooks from "../components/ReadBooks/ReadWishBooks";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)


    return (
        <div className='container mx-auto'>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
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
                <Outlet/>
        </div>
    );
};

export default ListedBooks;