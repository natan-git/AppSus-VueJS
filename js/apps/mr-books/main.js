'use strict';

import theRouter from './routes.js';

new Vue({
    router: theRouter,
    el: '#books-app',
    template: `
        <div>
            <nav class="header flex space-between">
                <h1>Mr.Books</h1>
                <div class="flex space-around links">
                <router-link to="/">Home</router-link>
                <router-link to="/booksApp">Store</router-link>
                <router-link to="/addBook">Add Book</router-link>
                </div>
            </nav>
            <router-view></router-view>
            <footer class="flex"> © Elior Zur 2019 </footer>
        </div>
    `
})