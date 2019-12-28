'use strict';
import mailService from '../services/mail-service.js';
import emailPreview from '../cmp/email-preview.cmp.js';
import {
    eventBus
} from '../../../main-service/bus-service.js';

export default {
    template: `
        <section class="email-app-container flex flex-center">
                <ul class="emails-list flex col">
                    <li class="email-organize clean-list flex both-align-c space-between">
                        <span>From</span>
                        <span>Subject</span>
                        <span>Recived At</span>
                    </li>
                    <email-preview class="clean-list" v-if="(emails)" v-for="(email,idx) in filterEmails" :email="email" :key="email.id" :emails="emails" :idx="idx"></email-preview>
                </ul>
        </section>
    `,
    data() {
        return {
            emails: null,
            currentEmailsState: 1,
            filterBy: {
                subject: '',
                read: 'all'
            }
        }
    },
    created() {
        console.log('Loading eMails');
        this.emails = mailService.query();
        console.log(this.emails);
        eventBus.$on('changeState', state => {
            this.currentEmailsState = state;
        });
        eventBus.$on('filtered', filterBy => {
            this.filterBy = filterBy;
        });
    },
    components: {
        emailPreview
    },
    computed: {
        filterEmails() {
            let emailsToShow = this.emails;
            if (this.currentEmailsState === 1) {
                emailsToShow = this.emails.filter(email => !email.isDeleted);
            } else if (this.currentEmailsState === 2) {
                emailsToShow = this.emails.filter(email => email.isSent);
            } else if (this.currentEmailsState === 3) {
                emailsToShow = this.emails.filter(email => email.isFavorite);
            } else if(this.currentEmailsState===4){
                emailsToShow = this.emails.filter(email=> email.isDeleted);
            }
            if (this.filterBy.subject === '' && this.filterBy.read === 'all') return emailsToShow;
            var regex = new RegExp(`${this.filterBy.subject}`, 'i');
            return emailsToShow.filter(email =>{
                if(this.filterBy.read === 'read')
                return regex.test(email.subject) === regex.test(this.filterBy.subject)&&email.isRead
                else if(this.filterBy.read === 'unread')
                return regex.test(email.subject) === regex.test(this.filterBy.subject)&&!email.isRead
                else return regex.test(email.subject) === regex.test(this.filterBy.subject)


            })

        }
    }

}
