import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./components/Root";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'books',
                loader: async () => {
                    return fetch('https://api.itbook.store/1.0/new');
                },
                element: <Books></Books>
            },
            {
                path: 'book/:bookId',
                loader: async ({ params }) => {
                    return fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
                },
                element: <BookDetails></BookDetails>
            }
        ],
    },

])

export default router;