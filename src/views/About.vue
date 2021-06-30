<template>
  <div class="about">
    <div class="introduction"> 
        <Astrologo />
        <h2> Oops!! Look like you lost in space </h2>
    </div>
    <Aboutcontent />
    <Slogan />
    <Footer />
  </div>
</template>

<script>
import Astrologo from "../components/Navbar/Logo.vue"
import Aboutcontent from "../components/About/main-content.vue"
import Slogan from "@/components/About/endingAbout.vue"
import Footer from "@/components/Footer/Footer.vue"
export default {
  components:{
    Aboutcontent,
    Astrologo,
    Slogan,
    Footer,
  }
};
</script>

<style scoped>
.body {
  padding: 0;
  margin: 0;
}
.introduction {
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
