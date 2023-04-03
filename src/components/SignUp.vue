<template>
    <div class="container">
        <div class="row vh-100">
            <div class="login-section">  
                <h2 class="text-center mb-4">Sign Up</h2>
                <form @submit.prevent="submitUserData()">
                    <div class="form-group">
                        <input type="text" v-model="user.firstName" class="form-control" placeholder="First Name">
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="user.lastName" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="form-group">
                        <input type="email" v-model="user.email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="user.password" class="form-control" id="inputPass" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <p class="text-center">Already a member? <router-link to="/login">login</router-link></p>
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
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
        return {
            user : {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        }
    },
    methods: {
        submitUserData: async function() {
            try{
                let response = await axios.post("http://localhost:9000/user", this.user);   
                console.log(response.data);
                localStorage.setItem("user", JSON.stringify(response.data));
                return this.$router.push("/");
            }catch (error){
                console.log(error);
            }
            
        }
    },
    mounted() {
        let userDataCheck = localStorage.getItem("user");
        if(userDataCheck){
            this.$router.push("/");
        }
    }
}
</script>