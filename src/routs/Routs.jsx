import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishList from "../components/WishList/WishList";
import PageToReadStatics from "../pages/PageToReadStatics";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/listedbooks',
                element: <ListedBooks></ListedBooks>,
                children: [
                    {
                        index: true,
                        element: <ReadBooks></ReadBooks>,
                        loader: ()=> fetch('/books.json')
                    },
                    {
                        path: 'readlist',
                        element: <ReadBooks></ReadBooks>,
                        loader: ()=> fetch('/books.json')
                    },
                    {
                        path: 'wishlist',
                        element: <WishList></WishList>,
                        loader: ()=> fetch('/books.json')
                    }
                ]
            },

            {
                path: 'book/:bookId',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('/books.json')
            },
            {
                path: '/pagestoread',
                element: <PageToReadStatics></PageToReadStatics>,
                loader: ()=> fetch('/books.json')
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>,
                loader: ()=> fetch('/author.json')
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])