import PropTypes from 'prop-types'
import { CiTimer } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { TbPageBreak } from "react-icons/tb";
import { Link } from 'react-router-dom';



const ReadBook = ({ readBook }) => {
    // console.log(readBook);
    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = readBook;
    return (
        <div className='grid grid-cols-6 gap-5 p-4 rounded-lg border'>
            <div>
                <img src={image} alt={bookName} />
            </div>
            <div className='col-span-5 space-y-4'>
                <div>
                    <h2 className="text-xl font-semibold">{bookName}</h2>
                    <p>By: {author}</p>
                </div>
                <div>
                    <div className='flex gap-3 items-center'>
                        <p className='font-medium'>Tags</p>
                        <ul className='flex gap-3'>
                            {
                                tags.map((tag, indx) => <li className='px-4 py-1 bg-lime-100 rounded' key={indx}>{tag}</li>)
                            }
                        </ul>
                        <p className='flex items-center gap-2'><CiTimer></CiTimer> <span className='font-medium'>Year of Publishing:</span> {yearOfPublishing}</p>
                    </div>
                </div>
                <div className='flex gap-4 border-b pb-3'>
                    <p className='flex items-center gap-2'><LuUsers></LuUsers> <span className='font-medium'>Publisher:</span> {publisher}</p>
                    <p className='flex items-center gap-2'><TbPageBreak></TbPageBreak> <span className='font-medium'>Pages:</span> {totalPages}</p>
                </div>
                <div className='flex gap-5'>
                    <p className='px-4 py-2 rounded-full bg-lime-100'>Category: {category}</p>
                    <p className='px-4 py-2 rounded-full bg-lime-200'>Rating: {rating}</p>
                    <Link to={`/book/${bookId}`} className='px-4 py-2 rounded-full bg-lime-500 text-white'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    readBook: PropTypes.object
}
export default ReadBook;