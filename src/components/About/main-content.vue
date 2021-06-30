<template>
  <div class="aboutContent">
      <div class="section1">
          <div class="text">
              <h2>{{content[0].title}}</h2>
              <p>{{content[0].content}}</p>
          </div>
          <img :src="content[0].image" alt="">
      </div>

      <div class="section2">
          <img :src="content[2].image" alt="">
          <div class="text">
              <h2>{{content[2].title}}</h2>
              <p>{{content[2].content}}</p>
          </div>
      </div>

      <div class="section3">
          <div class="text">
              <h2>{{content[3].title}}</h2>
              <p>{{content[3].content}}</p>
          </div>
          <div class="gallery"> 
            <img :src="content[3].image" alt="">
            <img :src="content[3].image" alt="">
            <img :src="content[3].image" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
data () {
    return {
        content: [
            {
                "id":"0",
                "title":"We make money",
                "image":"https://www.linkpicture.com/q/Fantastic-Planet-001.jpg",
                "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                "id":"1",
                "title":"We make money2",
                "image":"https://www.linkpicture.com/q/Fantastic-Planet-001.jpg",
                "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                "id":"2",
                "title":"No, really. We make money",
                "image":"https://www.linkpicture.com/q/Fantastic-Planet-001.jpg",
                "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                "id":"3",
                "title":"We make a lot of money",
                "image2":"https://www.linkpicture.com/q/earth1.png",
                "image1":"https://www.linkpicture.com/q/venus.png",
                "image":"https://www.linkpicture.com/q/Fantastic-Planet-001.jpg",
                "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
            {
                "id":"4",
                "title":"Honestly We make money",
                "image":"https://www.linkpicture.com/q/Fantastic-Planet-001.jpg",
                "content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            },
        ]
    }
}
}
</script>

<style scoped>
.aboutContent{
  width: 90%;
  background-color: #fff;
  margin: auto;
  padding: 30px 0;
  color: #000;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.4;
  position: relative;
  z-index: -10;
}
.aboutContent::before{
  content: '';
  position: absolute;
  background-color: #000;
  bottom: 0;
  left: 10%;
  width: 10px;
  height: 65%;
  z-index: -1;
}
.aboutContent::after{
  content: '';
  position: absolute;
  background-color: #000;
  top: 0;
  right: 15%;
  width: 10px;
  height: 65%;
  z-index: -1;
}
.text {
    padding:0px 10px;
}
.text h2 {
    font-size: 2.5rem;
}
.aboutContent img {
    width: 600px;
    height: 400px;
    object-fit: cover;
}
.section1 {
    width:80%;
    margin: 0 auto;
    display:flex;
    align-items: center;
}
.section1 .text p{
    font-size:1.5rem;
    width:100%;
}
.section2 {
    position: relative;
    top:-50px;
    text-align: center;
}
.section2 .text p{
    font-size:1.5rem;
    width:50%;
    margin: 0 auto;
}
.section3 {
    width:80%;
    position: relative;
    left:15%;
}
.section3 .text p{
    font-size:1.5rem;
    width:50%;
}
.section3 .gallery {
    display:flex;
}
.section3 .gallery img {
    width: 400px;
    height: 400px;
    padding:10px;
}
</style>