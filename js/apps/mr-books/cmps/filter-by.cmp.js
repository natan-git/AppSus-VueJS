'use strict';

export default{
    template:`
            <div class="books-filter flex">
            <input @change="setFilter" type="text" placeholder="Srearch by Name" v-model="filterBy.title" />
            <input @change="setFilter" type="number" placeholder="From Price" v-model.number="filterBy.fromPrice" />
            <input @change="setFilter" type="number" placeholder="To Price" v-model.number="filterBy.toPrice" /> 
        </div>
        `,
    data(){
        return{
            filterBy:{
                title:'',
                fromPrice:0,
                toPrice:200
            }
        }
    },
    methods:{
        setFilter(){
            console.log(this.filterBy);
            this.$emit('filtered',{...this.filterBy});
        }
    }
}