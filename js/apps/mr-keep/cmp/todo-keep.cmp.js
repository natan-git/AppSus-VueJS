import keepService from '../../mr-keep/keep-services.js';
import colorPicker from './color-picker.cmp.js'

export default {
    template: `
        <section class="card-container flex col align-end" :class="cardColor">
            <div class="todos grow">
                <ul>
                    <h1 class="grow" v-for="(todo, index) in todos" :key="index" :todo="todo"><i class="fas fa-asterisk"></i> {{todo}}</h1>
                </ul>
            </div>
            <div class="edit-text flex wrap">
                <textarea v-model="txt" class="edit-txt-input" ref="editInput" v-if="edit" type="text" :placeholder="placeholder"/>
                <i @click="onAddUpdatedKeep(id)" v-if="edit" class="fas fa-plus"></i>
            </div>
            <div class="card-icons flex align-end align-c ">
                <i @click="pinKeep(id)" class="fas fa-thumbtack" :class="{pinColor:pinnedColor}"></i>
                <i @click="showColors()" class="fas fa-palette"></i>
                <i @click="onEditKeep()"  class="far fa-edit"></i>
                <i @click="deleteKeep(id)" class="fas fa-trash-alt "></i>
            </div>
            <color-picker class="color-picker animated bounce" v-show="isShow"  @changeColor="setBackgroundColor"></color-picker>
        </section>
    `,
    props: ['data', 'id'],
    data() {
        return {
            cardColor: '',
            isShow: false,
            pinnedColor: null,
            txt: '',
            edit: false
        }
    },
    methods: {
        deleteKeep(id) {
            keepService.deleteKeep(id);
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
        onEditKeep() {
            this.edit = true;
        },
        onAddUpdatedKeep(keepId) {
            let newContent = this.$refs.editInput.value
            keepService.saveUpdatedKeep(keepId, newContent)
            this.edit = false;
        },
    },
    computed: {
        todos() {     
            return this.data.split(',')
        },
        changeBackgroundColor(color) {
            this.activeColor = color
        },
    },
    components: {
        colorPicker,
    }

}