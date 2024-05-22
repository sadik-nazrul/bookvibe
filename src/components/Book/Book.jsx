import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { bookId, bookName, image, tags, author, category, rating } = book;
    return (
        <Link to={`/book/${bookId}`} className='border rounded-xl p-4 flex flex-col gap-4'>
            <img src={image} alt={bookName} className=' h-52 w-full bg-slate-100 p-4 object-contain rounded-lg' />
            <ul className='flex justify-between'>
                {
                    tags.map((tag, indx) => <li className='bg-lime-100 text-black px-5 py-2 rounded-xl' key={indx}>{tag}</li>)
                }
            </ul>
            <div>
                <h2 className="lg:text-2xl text-lg font-medium">{bookName}</h2>
                <p>By: {author}</p>
            </div>
            <div className='flex justify-between'>
                <p>{category}</p>
                <p className='flex gap-1 items-center'>{rating} <CiStar /></p>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;