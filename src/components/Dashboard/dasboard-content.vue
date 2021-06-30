<template>
  <div class="container">
    <div class="title">
      <h2>Dashboard</h2>
      <button>Customize</button>
    </div>
    <div class="descrip">
      <div class="post">
        <h2>Total Posts</h2>
      </div>
      <div class="views">
        <h2>Total views</h2>
      </div>
      <div class="article">
        <h2>Most viewed article</h2>
      </div>
    </div>
    <div class="document">

    </div>
  </div>
</template>

<script>
export default {

};
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
  width:100%;
  height:70px;
  color:#000;
  background: #fff;
  display:flex;
  justify-content: space-between;
  padding:10px;
}
.container .descrip {
  display:flex;
  justify-content: space-between;
}
.container .post {
  width: 300px;
  height: 100px;
  background: #fff;
  margin: 20px;
}
.container .views {
  width: 300px;
  height: 100px;
  background: #fff;
  margin: 20px;
}
.container .article {
  width: 700px;
  height:100px;
  background: #fff;
  margin: 20px;
}
.container .document {
  width:100%;
  height:600px;
  background: #fff;
}
</style>
