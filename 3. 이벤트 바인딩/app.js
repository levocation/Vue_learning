const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
    setName(event, testName) {
      this.name = event.target.value + ' ' + testName;
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
