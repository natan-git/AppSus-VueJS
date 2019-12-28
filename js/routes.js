'use strict';
import keepApp from './apps/mr-keep/keep-app.cmp.js';
import homePage from './main-cmp/home-page.cmp.js';
import emailApp from './apps/mr-email/email-app.cmp.js';
import booksApp from './apps/mr-books/cmps/pages/books-app.cmp.js';
import addBook from './apps/mr-books/cmps/pages/add-book.cmp.js';
import bookDetails from './apps/mr-books/cmps/pages/book-details.cmp.js';
import emailListCmp from './apps/mr-email/cmp/email-list.cmp.js';
import emailDetailsCmp from './apps/mr-email/cmp/email-details.cmp.js';



const mainRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp,
        children: [
            {
                path: '/',
                component: emailListCmp
            },
            {
                path: ':id',
                component: emailDetailsCmp
            }

        ]
    },
    {
        path: '/books',
        component: booksApp
    },
    {
        path: '/books/:id',
        component: bookDetails
    },
    {
        path: '/addBook',
        component: addBook
    }
]

const router = new VueRouter({
    routes: mainRoutes
})

export default router;

// {
//     path: '/booksApp/book/:id',
//     component: bookDetails
// },
// {
//     path: '/addBook',
//     component: addBook
// }