'use strict';
import keepService from '../../apps/mr-keep/keep-services.js'
import addKeep from './cmp/add-keep.cmp.js';
import keepList from './cmp/keep-list.cmp.js';
import keepHeader from './cmp/keep-header.cmp.js'

export default {
    template: `
        <section class="keep-app-container ">
            <keep-header @filtered="setFilter"></keep-header>
            <add-keep></add-keep>
            <keep-list :keeps="keepsToShow"></keep-list>
        </section>
            
    `,
    data() {
        return {
            keeps: '',
            filterBy: null
        }
    },
    created() {
        this.keeps = keepService.query();
        console.log('keeps', this.keeps);
    },
    computed: {
        keepsToShow() {
            if (!this.filterBy) return this.keeps;
            console.log('this.filterBy', this.filterBy.txt);
            var regex = new RegExp(`${this.filterBy.txt}`, 'i');
            return this.keeps.filter(keep => {
                    console.log(keep)
                    return regex.test(this.filterBy.txt) === regex.test(keep.data)
                }

            )
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    components: {
        keepList,
        addKeep,
        keepHeader
    }

}