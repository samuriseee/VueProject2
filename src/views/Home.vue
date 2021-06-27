<template>
  <div class="home">
    <section id="sectionone" class="screen">
      <div id="scene" ref="scene">
        <div data-depth="0.1" class="bg">
          <img src="../../images/background.png" alt="" />
        </div>
        <div data-depth="0.2" class="rock1">
          <img src="https://www.linkpicture.com/q/rock_1.png" alt="" />
        </div>
        <div data-depth="1.2" class="earth">
          <img src="https://www.linkpicture.com/q/earth.png" alt="" />
        </div>
        <div data-depth="0.1" class="text">
          <h1>PLANETS.</h1>
        </div>
        <div data-depth="0.4" class="mid">
          <img src="https://www.linkpicture.com/q/mid_2.png" alt="" />
        </div>
        <div data-depth="0.1" class="fore">
          <img src="https://www.linkpicture.com/q/foreground.png" alt="" />
        </div>
        <div data-depth="0.1" class="among">
          <img src="https://www.linkpicture.com/q/amongus4.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "Home",
  mounted() {
      // vanilla js for parallax background 
      var scene = document.getElementById("scene");
      // this is ajax parallax libary
      //eslint-disable-next-line
      let parallaxInstance = new Parallax(scene);
    },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  list-style: none;
  box-sizing: border-box;
  background: rgb(0, 0, 0);
}
section {
  height: 91vh;
  overflow: hidden;
}

.bg img {
  width: 110vw;
  height: 110vh;
  filter: brightness(0.6);
}

.rock1 {
  position: absolute !important;
  left: 10vw !important;
  top: 20vh !important;
}

.rock1 img {
  width: 40%;
  filter: brightness(0.5);
}
.human {
  position: absolute !important;
  left: -14vw !important;
  top: 68vh !important;
}
.human img {
  width: 40%;
  object-fit: cover;
  filter: brightness(0.55);
}
.among {
  position: absolute !important;
    left: 58vw !important;
    top: 15vh !important;
}
.among img {
  width: 10%;
  object-fit: cover;
  filter: brightness(0.55);
  animation: spin 7s linear infinite;
}
@keyframes spin {
  100% {transform: rotate(360deg);
  }
}
/* @keyframes moving {
  0% {transform: translateX(0%);
  }
  100%{
    transform: translateX(100%);
  }
} */
.text h1 {
  font-family: "AlphaCentauri" !important;
  font-size: 5vw;
  color: #fff;
  letter-spacing: 20px;
  position: absolute;
  top: 35vh;
  left: 34vw;
}

.earth img {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 34vw;
  top: 25vh;
  z-index: 1;
  filter: brightness(0.7);
}

.mid {
  left: -150px !important;
  bottom: -100px !important;
  top: unset !important;
}

.mid img {
  width: 100%;
  z-index: 2;
  left: -20px;
  top: 20vh !important;
  filter: brightness(0.8);
}

.fore {
  right: -50px !important;
  bottom: -200px !important;
  top: 0px !important;
  left: unset !important;
}

.fore img {
  width: 400px;
  height: 110vh;
  z-index: 3;
  filter: brightness(0.5);
}

</style>