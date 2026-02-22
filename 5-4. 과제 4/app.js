const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isVisible: true,
            bgColor: ''
        };
    },
    computed: {
        paragraphClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                hidden: !this.isVisible,
                visible: this.isVisible
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.isVisible = !this.isVisible;
            if (this.isVisible) {
                this.inputClass = 'visible';
            }   else {
                this.inputClass = 'hidden';
            }
        }
    }
});

app.mount('#assignment');