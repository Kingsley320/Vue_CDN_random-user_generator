const app = Vue.createApp({
    data(){
        return{
            firstname: "Kingsley",
            lastname: 'Owolabi',
            email: 'kingsleyowolabi@gmail.com',
            gender: 'male',
            profile: 'https://randomuser.me/api/portraits/men/30.jpg'
        }
    },
    methods: {
        async getUserData(){
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json()

            this.firstname = results[0].name.first,
            this.lastname = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.profile = results[0].picture.large
        }
    }
})

app.mount('#app');
