import PropTypes from 'prop-types'
import { CiTimer } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { TbPageBreak } from "react-icons/tb";
import { Link } from 'react-router-dom';

const WishBook = ({wishBook}) => {
    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = wishBook;

    return (
        <div className='grid lg:grid-cols-6 gap-5 p-4 rounded-lg border'>
            <div>
                <img src={image} alt={bookName} />
            </div>
            <div className='lg:col-span-5 space-y-4'>
                <div>
                    <h2 className="text-xl font-semibold">{bookName}</h2>
                    <p>By: {author}</p>
                </div>
                <div>
                    <div className='flex gap-3 lg:items-center flex-col lg:flex-row'>
                        <p className='font-medium'>Tags</p>
                        <ul className='flex gap-3'>
                            {
                                tags.map((tag, indx) => <li className='px-4 py-1 bg-lime-100 rounded' key={indx}>{tag}</li>)
                            }
                        </ul>
                        <div>
                            <p className='flex items-center gap-2'><CiTimer></CiTimer> <span className='font-medium'>Year of Publishing:</span> {yearOfPublishing}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 border-b pb-3'>
                    <p className='flex items-center gap-2'><LuUsers></LuUsers> <span className='font-medium'>Publisher:</span> {publisher}</p>
                    <p className='flex items-center gap-2'><TbPageBreak></TbPageBreak> <span className='font-medium'>Pages:</span> {totalPages}</p>
                </div>
                <div className='flex gap-5 flex-col lg:flex-row text-center'>
                    <p className='px-4 py-2 rounded-full bg-lime-100'>Category: {category}</p>
                    <p className='px-4 py-2 rounded-full bg-lime-200'>Rating: {rating}</p>
                    <Link to={`/book/${bookId}`} className='px-4 py-2 rounded-full bg-lime-500 text-white'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

WishBook.propTypes = {
    wishBook: PropTypes.object
}
export default WishBook;