'use strict';

import emailCompose from './email-compose.cmp.js';
import {eventBus} from '../../../main-service/bus-service.js';
import emailFilter from '../cmp/email-filter.cmp.js';
export default {
    template: `
        <nav class="side-nav flex">
            <div class="flex"> 
                <ul class="side-nav-items flex col both-align-c clean-list space-between">    
                    <li class="flex space-around mobile-flex-col" >
                        <div class="compose-btn flex" @click="showComposeModal">
                            <span>Compose </span>
                            <img src="img/compose.png" class=" envelope" >
                        </div>
                        <div class="filter-mobile">
                            <email-filter></email-filter>
                        </div>
                    </li>
                    <div class="nav-selection end flex col ">
                        <li :class="{'picked-section':state.mails}" class="side-nav-item flex" @click="emitPickedEmails(1)">
                            <img src="img/mail.png" class=" nav-icon" >
                            <span class="hide-mobile">Mails</span>
                        </li>
                        <li :class="{'picked-section':state.sent}" class="side-nav-item flex" @click="emitPickedEmails(2)">
                            <img src="img/sent.png" class=" nav-icon" >

                            <span class="hide-mobile">Sent</span>
                        </li>
                        <li :class="{'picked-section':state.favorite}" class="side-nav-item flex" @click="emitPickedEmails(3)">
                            <img src="img/favorite.png" class=" nav-icon" >

                            <span class="hide-mobile">Favorite</span>
                        </li>
                        <li :class="{'picked-section':state.deleted}" class="side-nav-item flex" @click="emitPickedEmails(4)">
                            <img src="img/deleted.png" class=" nav-icon" >

                            <span class="hide-mobile">Deleted</span>
                        </li>
                    </div>
                </ul>
            </div>
            <email-compose @closeModal="showComposeModal" v-if="showCompose"></email-compose>
          
        </nav>
    `,
    data(){
        return{
            showCompose:false,
            sowenEmails : 1,
            state:{mails: true, sent: false, deleted: false,favorite:false}
        }
    },
    methods:{
        showComposeModal(){
            this.showCompose = !this.showCompose;
        },
        emitPickedEmails(emailsType) {
            this.sowenEmails = emailsType;
            eventBus.$emit('changeState', this.sowenEmails);
            this.state = { mails: false, sent: false, deleted: false };
            if (emailsType === 1) this.state.mails = true;
            if (emailsType === 2) this.state.sent = true;
            if (emailsType === 3) this.state.favorite = true;
            if (emailsType === 4) this.state.deleted = true;
            console.log('this.changeState',this.sowenEmails);
            this.$router.push('/email');
          }
    },
    components:{
        emailCompose,
        emailFilter
    }
}
