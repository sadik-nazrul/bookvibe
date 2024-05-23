import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBook, saveWishBook } from "../../utils/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const intId = parseInt(bookId);
    const book = books.find(book => book.bookId === intId);

    // Read book Even Handler
    const handleReadBook = book => {
        const saveReadLocal = saveReadBook(intId);
        if (saveReadLocal === 'exists_in_read') {
            toast.error(`"${book.bookName}" is already marked as read.`, {
                position: "top-center"
            });
        } else if (saveReadLocal === 'exists_in_wish') {
            toast.error(`"${book.bookName}" is already in your wishlist.`, {
                position: "top-center"
            });
        } else {
            toast.success(`"${book.bookName}" has been marked as read.`, {
                position: "top-center"
            });
        }
    }

    // Wish book Handler
    const handleWishBook = book => {
        const saveWishLocal = saveWishBook(intId);
        if (saveWishLocal === 'exists_in_wish') {
            toast.error(`"${book.bookName}" is already in your wishlist.`, {
                position: "top-center"
            });
        } else if (saveWishLocal === 'exists_in_read') {
            toast.error(`"${book.bookName}" is already marked as read.`, {
                position: "top-center"
            });
        } else {
            toast.success(`"${book.bookName}" has been added to your wishlist.`, {
                position: "top-center"
            });
        }
    }

    const { bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    return (
        <div className="container mx-auto py-10">
            <div className="grid lg:grid-cols-2 gap-6 p-5">
                {/* Image */}
                <div className="flex justify-center bg-slate-100 p-5 rounded-lg">
                    <img src={image} alt={bookName} className=" w-96" />
                </div>

                {/* Details */}
                <div className="space-y-2">
                    <div className="pb-2">
                        <h2 className="text-2xl font-semibold">{bookName}</h2>
                        <p>By: {author}</p>
                    </div>
                    <p className="border-y py-1 font-medium">{category}</p>

                    <div>
                        <p><span className="font-medium">Review:</span> {review}</p>
                    </div>
                    <ul className='flex gap-2 items-center pb-4 border-b'><span className="font-medium">Tag </span>
                        {tags.map((tag, indx) => <li className='bg-lime-100 text-black px-5 py-2 rounded-xl' key={indx}>{tag}</li>)}
                    </ul>
                    <p>Number of Pages: <span className="font-medium">{totalPages}</span></p>
                    <p>Publisher: <span className="font-medium">{publisher}</span></p>
                    <p>Year of Publishing: <span className="font-medium">{yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-medium">{rating}</span></p>

                    <div className="space-x-2 pt-4">
                        <button className="px-5 py-2 bg-transparent text-black border rounded" onClick={() => handleReadBook(book)}>Read</button>
                        <button className="px-5 py-2 bg-lime-500 text-white rounded" onClick={() => handleWishBook(book)}>Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={1000} />
        </div>
    );
};

export default BookDetails;
