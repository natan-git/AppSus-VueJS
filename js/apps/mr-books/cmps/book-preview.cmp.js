'use strict';

export default {
    props: ['book'],
    template: `
        <li class="book" >
            <img :src="imgSrc"/>
            <div class="book-prevew-info">
                <h3>{{book.title}}</h3>
                <span>Price:{{book.listPrice.amount}}{{showCurrency}} </span>
            </div>
        </li>
    `,
    data() {
        return {
            isShowing: false,
            imgSrc: this.book.thumbnail
        }
    },
    methods: {},
    computed: {
        showCurrency() {
            let currency;
            switch (this.book.listPrice.currencyCode) {
                case 'EUR':
                    return '€';
                case 'USD':
                    return '$';
                case 'ILS':
                    return '₪';
            }
            return currency;
        },
    }
}