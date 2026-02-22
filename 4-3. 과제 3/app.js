const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            isWaiting: false,
        }
    },
    methods: {
        increaseCounter(num) {
            this.counter += num;
        },
    },
    watch: {
        counter() {
            if (this.counter > 37 && !this.isWaiting) {
                this.isWaiting = true;
                setTimeout(() => {
                    this.counter = 0;
                }, 5000);
            }
        }
    },
    computed: {
        result() {
            if (this.counter > 37) {
                return 'Too much!';
            }
            return this.counter;
        }
    }
});

app.mount('#assignment');