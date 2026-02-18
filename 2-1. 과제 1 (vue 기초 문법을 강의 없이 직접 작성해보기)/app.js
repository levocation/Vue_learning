const app = Vue.createApp({
    data() {
        return {
            name: 'HWANG SUN HO',
            age: 22,
            favoriteNumber: Math.random(),
            image: 'https://http.cat/404',
        };
    }
});

app.mount('#assignment');