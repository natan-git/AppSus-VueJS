'use strict';

import mailService from '../services/mail-service.js';


export default {
    template: `
        <section class="compose-modal flex col">
            <div class="compose-top flex space-between ">
                <h1>  New Messege </h1>
                <span @click="closeCompose" ><i class="fas fa-times compose-x"></i></span> 
            </div>
            <div class="flex col space-around">
                <div class="flex col email-inputs">
                    <div class="compose-subject flex">
                        <h3>Subject:</h3>
                        <input v-model="newEmail.subject" type="text"/> 
                    </div>
                    <div class="compose-email-address flex">
                        <h3>To:</h3>
                        <input v-model="newEmail.sendto" type="text"/> 
                    </div>
                </div>
                <textarea v-model="newEmail.body" placeholder="Enter your email here:"></textarea>
            </div>
            <div class="replayBtn flex flex-end " @click="sendEmail">
                <div class="replay">
                <span>Send </span>
                <i class="fab fa-telegram-plane"></i>
                </div>
            </div>
        </section>
    `,
    data(){
        return{
            newEmail:{
                subject:'',
                body:'' ,
                sendto: '',
                sender: 'Elior & Natan',
                isRead: true,
                isDeleted: false,
                isSent: true,
                isFavorite: false,
                isPreview:false
            }
        }
    },
    methods:{
        closeCompose(){
            this.$emit('closeModal')
        },
        sendEmail(){
            mailService.sendEmail(this.newEmail);
            this.closeCompose();
        }
    },
    computed:{
    },

}