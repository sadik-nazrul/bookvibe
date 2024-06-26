import Books from "../components/Books/Books";
import Hero from "../components/Hero/Hero";

const Home = () => {
    return (
        <div className="container mx-auto min-h-[calc(100vh-120px)] flex flex-col p-5">
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default Home;