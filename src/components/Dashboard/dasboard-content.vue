<template>
  <div class="container">
    <div class="title">
      <h2>Dashboard</h2>
      <button>Customize</button>
    </div>
    <div class="descrip">
      <div class="post">
        <h2>Total Posts</h2>
        <h1><i class="fas fa-pen"></i> 214</h1>
      </div>
      <div class="views">
        <h2>Total views</h2>
        <h1><i class="fas fa-eye"></i> 130k</h1>
      </div>
      <div class="article">
        <h2>Most viewed article</h2>
        <h1>The most awesome astronaut ever</h1>
      </div>
    </div>
    <div class="document">
      <img src="https://www.linkpicture.com/q/totalviews.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.container .title {
  width: 100%;
  height: 70px;
  color: #000;
  background: transparent;
  outline: none;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.container .title h2 {
  font-size: 2rem;
}
.container .title button {
  width: 100px;
  height: 50px;
  background: transparent;
  outline: none;
  border: 1px solid #fff;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
}
.container .descrip {
  display: flex;
  justify-content: space-between;
}
.container .descrip h2 {
  font-size: 1rem;
  text-align: left;
  padding: 0px 10px;
}
.container .descrip h1 {
  display: flex;
  justify-content: space-evenly;
}
.container .post {
  width: 300px;
  height: 100px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
  margin: 20px;
}
.container .views {
  width: 300px;
  height: 100px;
  background: transparent;
  border-radius: 15px;
  border: 1px solid #fff;
  color: #fff;
  margin: 20px;
}
.container .article {
  width: 700px;
  height: 100px;
  background: transparent;
  border-radius: 15px;
  border: 1px solid #fff;
  color: #fff;
  margin: 20px;
}
.container .document {
  width: 100%;
  height: 600px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
}
.container .document img {
  width: 100%;
  height: 600px;
}
</style>
