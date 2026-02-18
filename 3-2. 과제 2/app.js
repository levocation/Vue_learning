const app = Vue.createApp({
    data() {
        return {
            output: '',
            output2: '',
        };
    },
    methods: {
        showAlert() {
            alert('Show me the Alert!');
        },
        outputValue(event) {
            this.output = event.target.value;
        },
        outputValue2(event) {
            this.output2 = event.target.value;
        }
    }
});

app.mount('#assignment');