'use strict';

import utilService from '../../main-service/util-service.js';
import storageService from '../../main-service/storage.js'
const KEEPS_KEY = 'keepsKey';

export default {
    query,
    createKeep,
    deleteKeep,
    saveUpdatedKeep,
    setPin
}


function createKeep(type, data) {
    let newKeep = {
        id: utilService.makeId(),
        isPinned: false,
        type,
        data
    };
    gKeeps.unshift(newKeep);
}

function deleteKeep(keepId) {
    console.log('keepId', keepId);
    let idx = gKeeps.findIndex(keep => keep.id === keepId);
    gKeeps.splice(idx, 1);
    storageService.store(KEEPS_KEY, gKeeps);
}

function saveUpdatedKeep(keepId, content) {

    console.log('keepId', keepId, 'content', content)
    let keep = gKeeps.find(keep => keep.id === keepId);
    keep.data = content;
    storageService.store(KEEPS_KEY, gKeeps);
}

function setPin(keepId) {
    let keep = gKeeps.find(keep => keep.id === keepId);
    keep.isPinned = !keep.isPinned;
}



function query() {
    var keep = storageService.load(KEEPS_KEY);
    if (!keep) {
        keep = gKeeps;
        storageService.store(KEEPS_KEY, keep);
    }
    gKeeps = keep;
    return gKeeps;
}




let gKeeps = [{
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepTxt',
        data: 'We use the v-on directive to listen to DOM events and run some JavaScript when they re triggered.'

    },
    {
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepVideo',
        data: 'Dk7h22mRYHQ'
    },

    {
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepTxt',
        data: 'The v-model directive makes two way binding between form input and our model'
    },
    {
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepTodo',
        data: 'learn html,learn css,learn javascript'
    },
    {
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-take-the-risk-or-lose-the-chance-unknown-wisdom-quotes.jpg'
    },
    {
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepTxt',
        data: 'Similar to binding normal properties on native dom elements, we can also use v bind for dynamically binding props of a component to data on the parent.'
    },
    {
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepImg',
        data: 'https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/short-inspirational-quotes-stay-foolish-to-stay-sane-maxime-lagace-wisdom-quotes.jpg'
    },
    {
        id: utilService.makeId(),
        isPinned: false,
        type: 'keepVideo',
        data: 'WSKi8HfcxEk'
    },
]