'use strict';
import mailService from '../services/mail-service.js';

export default {
    name:'email-details',
    template: `
        <section v-if="email" class="expand-email flex col">
            <div class="subj-top-expand flex space-between expand-subject">
                <h1>Subject: {{email.subject}}</h1>
                <div class="flex space-between actions">
                    <div @click="deleteEmail(email.id)" class="hover-to-show-link action">
                        <span class="hover-to-show hide-mobile">Delete</span>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div @click="markAsFavorite(email.id)" class="hover-to-show-link action">
                        <span class="hover-to-show hide-mobile">Favorite</span>
                        <i v-if="!email.isFavorite" class="far fa-star icon-info"></i>
                        <i v-if="email.isFavorite" class="far fa-star icon-info favorite"></i>
                    </div>
                </div>
            </div>
            <div class="flex space-between expand-sender">
                <h3>{{email.sender}}</h3>
            </div>
            <div class="flex space-between expand-content">
                <p>{{email.body}}</p>
            </div>

        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    created() {
        console.log('Loading eMail');
        this.loadEmail();
    },
    methods: {
        loadEmail() {
            const emailId = this.$route.params.id;
            console.log(emailId);

            mailService.getEmailById(emailId)
                .then(email => {
                    this.email = email;
                })
        },
        deleteEmail(emailId){
            mailService.deleteEmail(emailId);  
            this.$router.push('/email/');
        },
        markAsFavorite(emailId){
            mailService.markAsFavorite(emailId);

        }
    },
    watch: {
        '$route.params.id'() {
            console.log('Route param: "id" changed');
            this.loadEmail;
        }
    }
}