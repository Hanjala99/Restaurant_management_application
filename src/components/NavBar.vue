<template>
<nav class="navbar navbar-expand-md bg-success">
  <div class="container">
    <router-link to="/" class="navbar-brand text-white">Resturant Management</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        <li class="nav-item me-4">
            <router-link to="/addresturant" class="text-dark">Add New Resturant</router-link>
        </li>
        <li class="nav-item">
            <button @click="logoutUser()" class="btn btn-dark">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "NavBar",
    methods: {
        logoutUser() {
            localStorage.clear();
            return this.$router.push('/signup');
        }
    }
}
</script>