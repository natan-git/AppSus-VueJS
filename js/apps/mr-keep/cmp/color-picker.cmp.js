export default {
    template: `
                <section class="color-picker-container">
                    <div class="colors-container flex justify-evenly">
                        <div @click="setColor1" class="color-box setColor1"></div>
                        <div @click="setColor2" class="color-box setColor2"></div>
                        <div @click="setColor3" class="color-box setColor3"></div>
                        <div @click="setColor4" class="color-box setColor4"></div>
                        <div @click="setColor5" class="color-box setColor5"></div>
                        <div @click="setColor6" class="color-box setColor6"></div>
                    </div>
                </section>
`,
    data() {
        return {
            color: null
        }
    },
    methods: {
        setColor1() {
            this.$emit('changeColor', 'setColor1')
        },
        setColor2() {
            this.$emit('changeColor', 'setColor2')
        },
        setColor3() {
            this.$emit('changeColor', 'setColor3')
        },
        setColor4() {
            this.$emit('changeColor', 'setColor4')
        },
        setColor5() {
            this.$emit('changeColor', 'setColor5')
        },
        setColor6() {
            this.$emit('changeColor', 'setColor6')
        }
    },
    computed: {

    }
}