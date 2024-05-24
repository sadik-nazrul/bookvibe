import PropTypes from 'prop-types'

const Author = ({author}) => {
    const {authorName, image} = author;
    console.log(author);
    return (
        <div className='border p-5 rounded-xl shadow hover:scale-105 flex flex-col items-center gap-4'>
            <img src={image} alt={authorName} className='w-52 h-52' />
            <h2 className="text-xl font-medium">{authorName}</h2>
        </div>
    );
};
Author.propTypes = {
    author: PropTypes.object
}
export default Author;