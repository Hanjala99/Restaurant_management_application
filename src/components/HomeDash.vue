<template>
    <NavBar />
    <div class="container mt-4">
        <table class="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Resturant Name</th>
                    <th scope="col">Resturant Number</th>
                    <th scope="col">Resturant Address</th>
                    <th scope="col">Pin Code</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="listItem in resturantList" :key="listItem.id">
                    <td scope="col text-center">{{ listItem.id}}</td>
                    <td scope="col">{{ listItem.resturantName }}</td>
                    <td scope="col">{{ listItem.mobileNo }}</td>
                    <td scope="col">{{ listItem.resturantAddress }}</td>
                    <td scope="col">{{ listItem.pinCode }}</td>
                    <td scope="col">
                        <router-link :to="`/updateresturantname/${listItem.id}`">Update</router-link>
                        / <router-link to="#" @click="deleteResturant(listItem.id)">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
import NavBar from './NavBar.vue';
export default {
    name: "HomeDash",
    components: {
        NavBar,
    },
    data() {
        return {
            resturantList: [],
        }
    },
    created: async function () {
        try {
            let response = await axios.get("http://localhost:9000/resturantlist");
            console.log(response.data);
            this.resturantList = response.data;
        } catch (error) {
            console.log(error)
        }
    },
    mounted() {
        let userDataCheck = localStorage.getItem("user");
        if (!userDataCheck) {
            this.$router.push("/signup");
        }
    },
    methods: {
        async deleteResturant(id) {
            try{
                let response = await axios.delete(`http://localhost:9000/resturantlist/${id}`);
                if(response){
                   let response = await axios.get("http://localhost:9000/resturantlist");
                   this.resturantList = response.data;
                   return this.$router.push('/');
                }
            } catch(error){
                console.log(error);
            }
        }
    },

}

</script>