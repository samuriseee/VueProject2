<template>
  <div class="blogs">
    <template v-for="blog in blogs"> 
      <div :key="'blog-'+blog.id" class="blogContent"
          @click="$router.push('/blogs/'+blog.id)"
      > 
      <img :src="blog.thumbnail">
        <span> 
          <h1>{{blog.title}}</h1>
          
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default ({
  name: 'Blogs',
  data() {
    return {
      blogs: [
        {
          "id": "1",
          "categoryId": "1",
          "title": "earth",
          "fact":"365.26 Earth days",
          "thumbnail": 'https://www.linkpicture.com/q/earth1.png',
          "content": "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present."
        },
        {
          "id": "2",
          "categoryId": "2",
          "title": "jupiter",
          "fact":"365.26 Earth days",
          "thumbnail": "https://www.linkpicture.com/q/jupiter.png",
          "content": "Jupiter is the fifth planet from the Sun and the largest planet of the Solar System. It is the oldest planet of the Solar System thus it was the first to take shape out of the remains of the solar nebula."
        },
        {
          "id": "3",
          "categoryId": "3",
          "title": "mars",
          "fact":"365.26 Earth days",
          "thumbnail": "https://www.linkpicture.com/q/mars.png",
          "content": "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth."
        },
        {
          "id": "4",
          "categoryId": "4",
          "title": "neptune",
          "fact":"365.26 Earth days",
          "thumbnail": "https://www.linkpicture.com/q/neptune.png",
          "content": "Neptune is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants."
        },
        {
          "id": "5",
          "categoryId": "5",
          "title": "mercury",
          "fact":"365.26 Earth days",
          "thumbnail": "https://www.linkpicture.com/q/mercury.png",
          "content": "Mercury is the closest planet to the Sun but, perhaps surprisingly, it does not have the highest temperatures. It is the second densest planet of the Solar System, but also the smallest planet. The structure of Mercury makes it the most similar planet to Earth."
        },
        {
          "id": "6",
          "categoryId": "6",
          "title": "saturn",
          "fact":"365.26 Earth days",
          "thumbnail": "https://www.linkpicture.com/q/saturn.png",
          "content": "Saturn is the sixth planet from the Sun, with the largest planetary rings in the Solar System. It is the second-largest planet after Jupiter, and recently, with many other moons being discovered, it surpassed the number of Jupiter’s moons."
        },
        {
          "id": "7",
          "categoryId": "7",
          "title": "uranus",
          "fact":"365.26 Earth days",
          "thumbnail": "https://www.linkpicture.com/q/uranus.png",
          "content": "Uranus is the seventh planet discovered in the Solar System that also led to the discovery of the last planet, Neptune they are both referred to as ice giants."
        },
        {
          "id": "8",
          "categoryId": "8",
          "title": "venus",
          "fact":"365.26 Earth days",
          "thumbnail": "https://www.linkpicture.com/q/venus.png",
          "content": "Venus is the second planet from the Sun and the sixth-largest. Together with Mercury, they are the only planets without a satellite, even though Mercury is closer to the sun, Venus is the hottest planet."
        },
      ]
    }
  },
})
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/obti-sans');
.blogContent {
  cursor: pointer;
}
.blogs {
  display:grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
}
.blogs h1{
  padding:10px;
  font-size:40px;
  font-family: "AlphaCentauri";
}
h3{
  width:450px;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
  opacity: 0.8;
}
.blogs div {
  text-align: left;
  align-items: center;
  display:flex;
}
</style>