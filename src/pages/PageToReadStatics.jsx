import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { useEffect, useState } from "react";
import { getStoredReadWhishlistData } from "../utils/localstorage";
import { useLoaderData } from "react-router-dom";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToReadStatics = () => {
    const books = useLoaderData()
    const [displayReadBooks, setDisplayReadBooks] = useState([])
    
    useEffect(() => {
        const storedReadWishBooks = getStoredReadWhishlistData();
        // console.log(storedReadWishBooks.read);
        if (books.length > 0) {
            const readBook = books.filter(book => storedReadWishBooks.read.includes(book.bookId));
            setDisplayReadBooks(readBook);
        }
    }, [books]);
    

    return (
        <div className="container mx-auto">
            <div className="h-40 bg-slate-200 flex justify-center items-center m-5 lg:m-0 rounded-xl lg:mb-4">
                <h2 className="text-xl lg:text-3xl font-semibold">Read Books Pages Stats</h2>
            </div>

            {/* Chart */}
            <div className="lg:block hidden pb-10">
                <BarChart
                    width={1140}
                    height={500}
                    data={displayReadBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                        label={{ position: "top" }}
                    >
                        {displayReadBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>

            {/* Chart for mobile */}
            <div className="lg:hidden block">
                <BarChart
                    width={370}
                    height={300}
                    data={displayReadBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                        label={{ position: "top" }}
                    >
                        {displayReadBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PageToReadStatics;