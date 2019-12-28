'use strict';

import {booksService} from '../../services/books-service.js';
import filterBy from '../filter-by.cmp.js';
import booksList from '../books-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookPreview from '../book-preview.cmp.js';
import booksHeader from '../header-books.cmp.js';

export default {
    template: `

    <section class="books-app">
        <books-header></books-header>
        <filter-by @filtered="setFilter"></filter-by>
        <books-list :books="booksToShow" @selected="selectBook"></books-list>
        <!-- <book-details></book-details> -->
    </section >
    `,
    data() {
        return {
            books: [],
            filterBy: null,
            selectedBook: ''
        }
    },
    methods: {
        setFilter(filterBy) {
            console.log('Parent got filter:', filterBy);
            if (filterBy) this.filterBy = filterBy;
        },
        selectBook(id) {
            let currBook = null;
            if (id) currBook = booksService.getBookById(id)
            console.log('book id:', id);
            console.log('currBook:', currBook);
            this.selectedBook = currBook;
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            console.log('filter', this.filterBy);
            var regex = new RegExp(`${this.filterBy.title}`, 'i');
            return this.books.filter(book => {
                return regex.test(book.title) &&
                    book.listPrice.amount <= this.filterBy.fromPrice &&
                    book.listPrice.amount >= this.filterBy.toPrice
            });
            
        }
    },
    created() {
        booksService.getBooks()
            .then(books =>  this.books = books) 
    },
    components: {
        filterBy,
        booksList,
        bookDetails,
        bookPreview,
        booksHeader
    }
}