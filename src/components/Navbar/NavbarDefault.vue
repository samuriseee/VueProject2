<template>
  <div id="nav">
    <div class="logo" @click="$router.push('/')">astro.</div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/blogs">Blogs</router-link></li>
      </ul>
      <button @click="$router.push('/dashboard')">Dashboard</button>
      <button @click="$router.push('/login')">Log out</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 17px;
}
#nav a {
  font-weight: bold;
  color: #1776d4;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
}
#nav a:hover {
  color: #fff;
}
#nav a.router-link-exact-active {
  color: #fff;
}
#nav div {
  display: flex;
}
#nav ul {
  display: flex;
  list-style: none;
  text-decoration: none;
}
#nav ul li {
  text-decoration: none;
  margin: 0px 5px;
}
#nav button {
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid rgb(61, 61, 61);
  background: transparent;
  margin: 0px 10px;
  transition: 0.5s;
}
#nav button:hover {
  background: cornflowerblue;
}
.logo {
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 35px;
  font-family: "AlphaCentauri";
}
</style>
