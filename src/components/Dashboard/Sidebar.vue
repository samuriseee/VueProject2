<template>
  <div class="container">
    <ul>
      <li @click="$router.push('/')">
        <a>
          <span class="icon"
            ><i class="fa fa-home" aria-hidden="true"></i
          ></span>
          <span class="title">Home</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"
            ><i class="fa fa-user" aria-hidden="true"></i
          ></span>
          <span class="title">Profile</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"
            ><i class="fa fa-comment" aria-hidden="true"></i
          ></span>
          <span class="title">Messages</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"
            ><i class="fa fa-question-circle" aria-hidden="true"></i
          ></span>
          <span class="title">Help</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
          <span class="title">Setting</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"
            ><i class="fa fa-lock" aria-hidden="true"></i
          ></span>
          <span class="title">Password</span>
        </a>
      </li>
      <li @click="$router.push('/login')">
        <a>
          <span class="icon"
            ><i class="fa fa-reply" aria-hidden="true"></i
          ></span>
          <span class="title">Logout</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  font-family: "Obti Sans", sans-serif;
}
.container {
  position: fixed;
  width: 60px;
  height: 100%;
  background: rgb(71, 114, 194);
  filter: brightness(0.95);
  transition: 0.5s;
  overflow: hidden;
}
.container:hover {
  width: 300px;
}
.container ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.container ul li {
  position: relative;
  width: 100%;
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "AlphaCentauri";
}
.container ul li:hover {
  background: rgb(29, 54, 102);
}
.container ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: #fff;
}
.container ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.container ul li a .icon .fa {
  font-size: 24px;
}
.container ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.logo {
  display: flex;
  justify-content: flex-start;
}
</style>
