import keepService from '../../mr-keep/keep-services.js';
import colorPicker from './color-picker.cmp.js'

export default {
    template: `
        <section class="card-container flex col" :class="cardColor">
            <h1 v-if="!edit" class="grow">{{data}}</h1>
            <!-- <h1 v-if="edit">{{txt}}</h1> -->
            <div class="edit-text flex wrap">
                <textarea v-model="txt" class="edit-txt-input" ref="editInput" v-if="edit" type="text" :placeholder="placeholder"/>
                <i @click="onAddUpdatedKeep(id)" v-if="edit" class="fas fa-plus"></i>
            </div>
            <div class="card-icons align-end flex align-c ">
                <i @click="pinKeep(id)" class="fas fa-thumbtack" :class="{pinColor:pinnedColor}"></i>
                <i @click="showColors()" class="fas fa-palette"></i>
                <i @click="onEditKeep(id)"  class="far fa-edit"></i>
                <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
            </div>
            <color-picker class="color-picker animated bounce" v-show="isShow" @changeColor="setBackgroundColor"></color-picker>
        </section>
    `,
    props: ['data', "id", "hover"],
    data() {
        return {
            content: this.data,
            cardColor: '',
            edit: false,
            elInput: null,
            placeholder: '',
            isShow: false,
            pinnedColor: false,
            txt: ''
        }
    },
    created() {
        this.txt = this.data
    },
    methods: {
        deleteKeep(id) {
            keepService.deleteKeep(id);
        },
        onEditKeep() {
            this.edit = true;
        },
        onAddUpdatedKeep(keepId) {
            let newContent = this.$refs.editInput.value
            keepService.saveUpdatedKeep(keepId, newContent)
            this.edit = false;
        },
        setBackgroundColor(color) {
            this.cardColor = color;
            console.log('this.color', this.cardColor);
            this.isShow = !this.isShow;
        },
        showColors() {
            this.isShow = !this.isShow;
        },
        pinKeep(id) {
            this.pinnedColor = !this.pinnedColor;
            keepService.setPin(id);
        },



    },
    mounted() {
        // this.elInput = this.$refs;
    },
    components: {
        colorPicker,
    }
}