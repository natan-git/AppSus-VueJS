'use strict';
import {eventBus} from '../../../main-service/bus-service.js';


export default {
    template: `
    <section class="filter flex align-c space-around">
        <div class="flex align-c filter-input">
            <img src="img/search.png" class="search-icon">
            <input class="filter-input" @input="emitFilter" type="text" placeholder="Srearch.." v-model="filterBy.subject" />
        </div>
        <select class="filter-select" v-model="filterBy.read" @change="emitFilter">
            <option value="all" >All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
        </select>
    </section>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                read : 'all'
            }
        }
    },

    methods:{
        // console.log('DogFilter Created');
        emitFilter(){
            eventBus.$emit('filtered', this.filterBy);
        }
        // this.$emit('filtered', this.filterBy)
    }
}