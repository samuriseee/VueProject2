<template>
  <div class="container">
    <img src="https://www.linkpicture.com/q/background3.jpg" alt="" />
    <div class="loginbox">
      <img
        src="https://www.linkpicture.com/q/cat_8.jpg"
        alt=""
        class="avatar"
      />
      <h1>SIGN IN</h1>
      <form
        action=""
        v-on:submit.prevent="
          $router.push({
            path: '/dashboard',
          })
        "
      >
        <p>Username</p>
        <input type="text" placeholder="Username" required />
        <p>Password</p>
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Login" />
        <a href="#">Lost your password?</a><br />
        <a href="#">Don't have an account?</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.container {
  width: 100%;
  object-fit: cover;
}
.container img {
  filter: brightness(0.94);
}
.loginbox {
  width: 320px;
  height: 420px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 8px 8px 50px #000;
  border-radius: 7px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  top: -50px;
  display: flex;
  margin: 0 auto;
}
h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
  font-family: "AlphaCentauri";
  margin-top: -20px;
}
.loginbox p {
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-align: left;
}
.loginbox input {
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
}
.loginbox input[type="text"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}
.loginbox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: rgb(102, 143, 219);
  font-size: 18px;
  border-radius: 20px;
}
.loginbox input[type="submit"]:hover {
  cursor: pointer;
  background: rgba(5, 124, 221, 0.719);
  color: #fff;
}
.loginbox a {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgrey;
}
.loginbox a:hover {
  color: rgba(243, 243, 232, 0.856);
}
</style>
