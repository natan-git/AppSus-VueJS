'use strict';

export default{
    template:`
           <form @submit.prevent="onSubmit" class="user-review flex col wrep">
                <div class="rev-user-name">
                    <label for="readerName">Your Name:</label>
                    <input ref="readerName" type="text" v-model="review.name">
                </div>  
                <div>
                <label for="ReadAt">Read At: </label>
                <input type="date" v-model="review.readAt">
                </div>
                <div class="rev-rate">
                    <label for="Rate">Rate:</label>
                    <button @click.prevent="updateRate(i)" v-for="i in 5" :class="{marked: review.rate > i-1}" >☆</button>
                </div>
                <div>
                <label for="Review">Your Book Review: </label>
                <textarea style="width:300px; height:200px" v-model="review.text"></textarea>
                <button type=submit>Leave Review</button>
                </div>
            </form>
    `,
    data(){
        return{
            review:{
                name:'Book Reader',
                rate:0,
                readAt:null,
                text:'Nice book!'
            },
            deafultDate:null
        }
    },
    methods:{
        updateRate(rate){
            this.review.rate = rate;
        },
        onSubmit(){
            let review = {...this.review};
            this.$emit('reviewed',review);
            this.review = {name: 'Books Reader', rate: 0, readAt: this.defaultDate, text:'Nice book!'}
            
        }
    },
    mounted(){
        this.$refs.readerName.focus();
    },
    created(){
        var currDate = new Date();
        var year = currDate.getFullYear();
        var month = currDate.getMonth() + 1;
        if (month < 10) month = `0${month}`;
        var day = currDate.getDate();
        if (day < 10) day = `0${day}`;
        this.defaultDate = `${year}-${month}-${day}`;
        this.review.readAt = this.defaultDate;
    }

}