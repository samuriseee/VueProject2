<template>
  <div class="logo" @click="$router.push('/')">astro.</div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 100px;
  font-family: "AlphaCentauri";
  margin-top:-100px;
}
</style>
