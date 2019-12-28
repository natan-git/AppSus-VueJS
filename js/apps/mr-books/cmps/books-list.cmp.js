'use strict';
import bookPreview from './book-preview.cmp.js';

export default{
    props:['books'],
    template:`
        <section class="books-list-container flex ">
                <ul class="books-list flex wrap flex-center">
                    <router-link v-for="(currBook, idx) in books" :to="'/books/' + currBook.id" :key="currBook.id">
                        <book-preview  :book="currBook" :bookIdx="idx" @click.native="selected(currBook.id)"></book-preview>
                    </router-link>
                </ul>
        </section>
    `,
    methods:{
        selected(id){
            this.$emit('selected',id)
        }
    },
    components:{
        bookPreview
    },
    created(){
        console.log("books:",this.books);
    }
}