import {createRouter, createWebHistory} from 'vue-router'
import HomeDash from "../components/HomeDash.vue";
import SignUp from "../components/SignUp.vue";
import LoginPage from "../components/LoginPage.vue"
import UpdateResturantName from "../components/UpdateResturantName.vue";
import AddResturant from "../components/AddResturant.vue";

const routes = [
    {
        path:"/",
        name:"HomeDash",       
        component: HomeDash 
    },
    {
        path:"/signup",
        name:"SignUp",       
        component: SignUp 
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: "/addresturant",
        name: "AddResturant",
        component: AddResturant
    },
    {
        path: "/updateresturantname/:id",
        name: "UpdateResturantName",
        component: UpdateResturantName
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;