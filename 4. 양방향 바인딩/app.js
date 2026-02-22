const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 500);
      }
    }
    // 해당 메소드는 name이 변경될 때마다 자동으로 실행됨.
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //     return;
    //   }
    //   // name이 변경될 때마다 그때그때 변경된 최신값을 value로 던지기 때문에 굳이 this.name이라 쓸 필요 없음
    //   // this.fullName = this.name + ' ' + 'Test001';
    //   this.fullName = value + ' ' + this.lastName;
    // },
    // // 인자를 2개 받을 수도 있음.
    // // name(newValue, oldValue) {
    // //   console.log('New Value: ' + newValue);
    // //   console.log('Old Value: ' + oldValue);
    // // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //     return;
    //   }
    //   this.fullName = this.name + ' ' + value;
    // }
  },
  computed: { // 메소드가 아니라 데이터(속성)으로 취급되므로 HTML에서 사용 시 괄호를 붙이지 않음
    fullName() { // 캐싱된 결과를 반환하는 계산된 속성 (Computed Property)
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  // 그럼 대체 메소드를 언제 쓰느냐?
  // computed는 데이터 기반 "계산 값"이라는 것을 인지해야 한다.
  // 1. computed는 인자를 받을 수 없지만, methods는 인자를 받을 수 있음.
  // 2. computed는 이벤트 핸들러로 사용할 수 없음. (예: @click="fullName"은 불가능)
  // 3. api 호출 등에 사용할 수 없음.
  methods: {
    outputFullName() {
      // Vue의 특성상 데이터가 변경되면 Template 전체를 재렌더링하기 때문에, 이 메서드가 실행될 때마다 콘솔에 'Running again...'이 출력됨.
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Test001';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
