import { useLoaderData } from "react-router-dom";
import Author from "../components/Author/Author";


const AboutUs = () => {
    const authors = useLoaderData();

    return (
        <div className="container mx-auto">
            <div className="h-50 bg-slate-200 flex flex-col justify-center items-center m-5 lg:m-0 rounded-xl lg:mb-4 p-5">
                <h2 className="text-xl lg:text-3xl font-semibold">About Us</h2>
                <p className="text-center lg:w-1/2">Welcome to Novely! Discover your next great read, connect with fellow book lovers, and explore a world of stories. Join our community and let your literary adventure begin. Happy reading!</p>
            </div>
            <div className="grid lg:grid-cols-6 gap-6 py-10">
                {
                    authors.map((author, indx) => <Author key={indx} author={author}></Author>)
                }
            </div>
        </div>
    );
};

export default AboutUs;