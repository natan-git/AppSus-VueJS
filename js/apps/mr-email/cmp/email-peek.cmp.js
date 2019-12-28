'use strict';

import mailService from '../services/mail-service.js';


export default {
    props:["email"],
    template: `
        <li class="peek flex col">
            <div class=" flex space-between peek-subject">
                <h1>{{email.subject}}</h1>
                <div class="flex space-between actions">
                    <div @click="deleteEmail(email.id)" class="hover-to-show-link action">
                        <span class="hover-to-show hide-mobile">Delete</span>
                        <i class="fas fa-trash icon-info"></i>
                    </div>
                    <div @click.stop="markAsFavorite(email.id)" class="hover-to-show-link action">
                        <span class="hover-to-show hide-mobile">Favorite</span>
                        <i v-if="!email.isFavorite" class="far fa-star icon-info"></i>
                        <i v-if="email.isFavorite" class="far fa-star icon-info favorite"></i>
                    </div>
                    <div @click="expand(email.id)" class="hover-to-show-link action">
                        <span class="hover-to-show icon-info hide-mobile">Expand</span>
                        <i class="fas fa-expand-arrows-alt "></i>
                    </div>
                </div>
            </div>
            <div class="flex  space-between peek-sender">
                <p>{{email.sender}}</p>
               
            </div>
            <p class="peek-content">{{email.body}}</p>
        </li>
    `,
    methods:{
        expand(){
            this.email.isPreview = false;
            this.$router.push(`/email/${this.email.id}`);
        },
        deleteEmail(emailId){
            mailService.deleteEmail(emailId);
        },
        markAsFavorite(emailId){
            mailService.markAsFavorite(emailId);

        }
    },
    computed:{
        emailUrl(){
            return `/email/${this.email.id}`;
        }
    }
}