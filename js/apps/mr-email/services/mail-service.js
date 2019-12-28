'use strict';

import utilService from '../../../main-service/util-service.js';
import storageService from '../../../main-service/storage.js';

export default {
  query,
  getEmailById,
  deleteEmail,
  sendEmail,
  markAsFavorite
}


const MAIL_KEY = 'gEmails';
var gEmails = [{
    id: 'AAA',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Welcome to Vue.js',
    sender: 'David Zur',
    isRead: false,
    time: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isFavorite: false,
    isPreview: false,
    isDeleted: false
  },
  {
    id: 'BBB',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Are you Ready?',
    sender: 'Dumble Door',
    isRead: true,
    time: '09:45',
    isDeleted: false,
    sendto: '',
    isSent: false,
    isFavorite: false,
    isPreview: false,
    isDeleted: false
  },
  {
    id: 'CCC',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Welcome to Vue.js',
    sender: 'Natan Zur',
    isRead: true,
    time: '08:50',
    isDeleted: true,
    sendto: '',
    isSent: false,
    isFavorite: false,
    isPreview: false,
    isDeleted: false
  },
  {
    id: 'DDD',
    body: 'Ipsum enim velit sint magna. Esse voluptate elit cillum occaecat in voluptate voluptate nulla exercitation amet. Aliqua deserunt nisi incididunt cillum Lorem deserunt consequat sunt reprehenderit elit pariatur.\r\n',
    subject: 'Welcome to Vue.js',
    sender: 'David Zur',
    isRead: false,
    time: '04:20',
    isDeleted: false,
    sendto: '',
    isSent: true,
    isFavorite: true,
    isPreview: false,
    isDeleted: false
  }
]


function query() {
  var emails = storageService.load(MAIL_KEY);
  if (!emails || emails.length < 1) {
    emails = gEmails;
    storageService.store(MAIL_KEY, emails);
  }
  gEmails = emails;
  return gEmails;
}

function getEmailById(emailId) {
  const email = gEmails.find(email => email.id === emailId);
  return Promise.resolve(email);
}


function deleteEmail(emailId) {

  // var idx = gEmails.findIndex(email => email.id === emailId);
  // if (idx !== -1) gEmails.splice(idx, 1);
  const email = gEmails.find(email => email.id === emailId);
  email.isDeleted = true;
  storageService.store(MAIL_KEY, gEmails)
  return Promise.resolve();
}

function sendEmail(newEmail) {
  let time = utilService.getTime();
  let timeStemp = (Date.now() / 1000) + (60 * 60 * 2);
  newEmail.id = utilService.makeId();
  newEmail.time = time;
  newEmail.timeStemp = timeStemp;
  debugger
  console.log(newEmail);
  gEmails.unshift(newEmail);
  storageService.store(MAIL_KEY, gEmails);
}

function markAsFavorite(emailId){
  const email = gEmails.find(email => email.id === emailId);
  email.isFavorite = !email.isFavorite;
  storageService.store(MAIL_KEY, gEmails)
  return Promise.resolve();
}
// 