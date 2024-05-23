import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishList from "../components/WishList/WishList";

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
                loader: () => fetch('/books.json'),
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
            }
        ]
    }
])