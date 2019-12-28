'use strict';

import {booksService} from '../../services/books-service.js';

export default{
    template:`
    <section class="add-book-page">
        <div class="book-search">
            <label for="bookName">Book Name:</label>
            <input ref="bookName" type="text" @input="onInput" v-model="bookName">
        </div>
        <div class="books-found">
            <ul v-if="returnedBooks.length!=0" class="flex col">
                <li v-for="book in returnedBooks" :key="book.id" class="found-book flex space-between">
                    <img :src="book.smallThumbnail" class="small-tnail"/>
                    <h4>{{book.title}}</h4>
                    <p v-for="author in book.authors" >{{author}}</p>
                    <button @click="addBookToLib(book)">+</button>
                </li>
            </ul>
        </div>  
    </section>  
    `,
    data(){
        return{
           bookName:'', 
           returnedBooks:[]
        }
    },
    methods:{
        onInput(){
            booksService.getBooksByTxt(this.bookName)
                   .then(books=>{
                       this.returnedBooks = books;
                       console.log(this.returnedBooks);
                       
                   })

        },
        addBookToLib(book){
            console.log('aha');
            
            booksService.addBook(book)
                .then(book=>{
                    console.log(book);
                    
                })
        }
    }
}