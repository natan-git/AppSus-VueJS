'use strict';
import storageService from '../../../main-service/storage.js';
import emailPeek from './email-peek.cmp.js';

export default {
    props: ['email', 'emails', 'idx'],
    template: `
        <li v-if="email" class="email-node flex space-between col" :class="{unread:!email.isRead, 'peek-border':email.isPreview}"  @click="toggleIsRead(email.isRead),toggleIsPreview()">
            <div class="email-info flex space-around col" :class="{preview:email.isPreview}">
                <div class="sender top-prev">
                    {{email.sender}}
                </div>
                <div v-if="!email.isPreview" class="subject">
                    {{email.subject}}
                </div>
                <div v-if="!email.isPreview" class="content">
                    {{email.body}}
                </div>
                <div class="recived-at top-prev">
                    {{email.time}}
                    <i v-if="!email.isRead" class="far fa-envelope"></i>
                    <i v-if="email.isRead" class="far fa-envelope-open"></i>
                </div>
            </div>
            <div v-if="email.isPreview">
                <email-peek :email="email" ></email-peek>
            </div>
        </li>
    `,
    methods: {
        toggleIsRead(isRead) {
            if (!isRead) {
                this.email.isRead = true;
                storageService.store('gEmails', this.emails);
            }
        },
        toggleIsPreview() {
            this.email.isPreview = !this.email.isPreview;
            storageService.store('gEmails', this.emails);
        },
    },
    components: {
        emailPeek
    }
}