<template>
<div> 
  <Sidebar />
    <router-view/>
  <Content />
</div>
</template>

<script>
import Content from '../components/dasboard-content.vue'
import Sidebar from "../components/Sidebar.vue"
// import Navbar from "../components/Navbar/NavbarDefault.vue"
export default {
components: {
    // Navbar,
    Sidebar,
    Content,
}
}
</script>

<style>

</style>