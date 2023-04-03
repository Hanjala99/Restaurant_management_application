<template>
    <div class="container">
        <div class="row vh-100">
            <div class="login-section">
                <h2 class="text-center mb-4">Login</h2>
                <form @submit.prevent="submitUserData()">
                    <div class="form-group">
                        <input type="email" v-model="user.email" class="form-control" id="inputEmail"
                            placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="user.password" class="form-control" id="inputPass"
                            placeholder="Password">
                    </div>
                    <div class="form-group">
                        <p class="text-center">New member? <router-link to="/signup">signup</router-link> </p>
                    </div>
                    <div class="form-group d-flex">
                        <button class="btn btn-dark w-100" v-on:click="submitUserData()">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "LoginPage",
    data() {
        return {
            user : {
               email: "",
               password: ""
            }
        }
    },
    methods: {
        // http://localhost:9000/user?email=ram@gmail.com&password=ram123
        async submitUserData(){
            try{
                let getUserData = await axios.get(`http://localhost:9000/user?email=${this.user.email}&password=${this.user.password}`);
                console.log(getUserData.data.length);
                if(getUserData.status == 200 && getUserData.data.length > 0){
                    localStorage.setItem("user", JSON.stringify(getUserData.data[0]));
                    return this.$router.push("/");
                }else{
                    console.log("no");
                }
            }catch(error){
                console.log(error);
            }
        }
    },
    mounted() {
        let userDataCheck = localStorage.getItem("user");
        if (userDataCheck) {
            this.$router.push("/");
        }
    }
}
</script>