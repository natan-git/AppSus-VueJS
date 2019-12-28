// import keepService from 
import keepService from '../../mr-keep/keep-services.js';
import keepList from './add-keep.cmp.js'
import keepPreview from './keep-preview.cmp.js'
import keepTxt from './txt-keep.cmp.js';
import keepImg from './img-keep.cmp.js';
import keepTodo from './todo-keep.cmp.js';
import keepVideo from './video-keep.cmp.js';

export default {
    props: ['keeps'],
    template: `
        <section class="keep-list-container flex wrap flex-center ">
            <div class="animated bounceIn" v-for="keep in pinnedKeeps" :key=keep.id >
                <component  :is="keep.type" :data="keep.data" :id="keep.id"></component>
            </div>
            <div class="animated bounceIn" v-for="keep in unPinnedKeeps" :key=keep.id >
                <component  :is="keep.type" :data="keep.data" :id="keep.id"></component>
            </div>
        </section>
    `,
    data() { return {} },
    methods: {
        mouseOver() {
            this.active = !this.active;
            console.log('this.active', this.active);
        }
    },
    computed: {
        pinnedKeeps() {

            return this.keeps.filter(keep => keep.isPinned)
        },
        unPinnedKeeps() {
            return this.keeps.filter(keep => !keep.isPinned)
        },
    },
    created() {},
    components: {
        keepList,
        keepPreview,
        keepTxt,
        keepImg,
        keepTodo,
        keepVideo
    }
}