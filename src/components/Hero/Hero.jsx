import HeroImg from '../../assets/hero-book.png'
import Button from '../Buttons/Button';
const Hero = () => {
    return (
        <div className="hero bg-slate-100 lg:px-10 lg:py-24 py-5 px-5 rounded-xl mt-5">
            <div className="flex justify-between lg:items-center flex-col lg:flex-row-reverse">
                <img src={HeroImg} className='lg:w-auto w-1/2' />
                <div className='lg:w-1/2 space-y-4'>
                    <h1 className="lg:text-6xl text-2xl font-bold leading-snug">Books to freshen up your bookshelf</h1>
                    <Button text={'View The List'}></Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;