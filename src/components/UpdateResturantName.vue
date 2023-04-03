<template>
    <NavBar />
    <h3 class="text-center mt-4">Add resturant</h3>
    <div class="container">
        <div class="row w-2">
            <div class="col-12 d-flex justify-content-center">
                <form class="row g-3 w-50" @submit.prevent="addResturantData()">
                    <div class="col-12">
                        <label for="inptResturantName" class="form-label">Resturant name</label>
                        <input v-model="resturantlist.resturantName" type="text" class="form-control" id="inptResturantName">
                    </div>
                    <div class="col-12">
                        <label for="inptResturantNumber" class="form-label">Mobile number</label>
                        <input v-model="resturantlist.mobileNo" type="tel" class="form-control" id="inptResturantNumber">
                    </div>
                    <div class="col-12">
                        <label for="inptResturantAddress" class="form-label">Address</label>
                        <input v-model="resturantlist.resturantAddress" type="text" class="form-control" id="inptResturantAddress" placeholder="Noida Sector 69">
                    </div>
                    <div class="col-12">
                        <label for="inptPin" class="form-label">Pin code</label>
                        <input v-model="resturantlist.pinCode" type="text" class="form-control" id="inptPin">
                    </div>
                    <div class="col-12">
                        <button @click="addResturantData()" type="submit" class="btn btn-primary">Add New Resturant Details</button>
                    </div>
                </form>
            </div>
        </div>
        {{this.routesId}}
    </div>
</template>


<script>
import axios from 'axios';
import NavBar from './NavBar.vue';
export default {
    name: "UpdateResturantName",
    components: {
        NavBar,
    },
    data() {
        return {
            resturantlist: {
                resturantName: "",
                mobileNo: "",
                resturantAddress: "",
                pinCode: ""
            },
            routesId: this.$route.params.id
        }
    },
    created: async function() {
        try{
            let response = await axios.get(`http://localhost:9000/resturantlist/${this.routesId}`);
            console.log(response.data); 
            this.resturantlist = response.data;
        } catch(error) {
            console.log(error);
        }
    },
    methods: {
        async addResturantData() {
            try{
                let response = await axios.put(`http://localhost:9000/resturantlist/${this.routesId}`, this.resturantlist);
                if(response){
                    return this.$router.push('/')
                }
            }catch(error) {
                console.log(error);
            }
        }
    },
}
</script>