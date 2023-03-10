
<template>
    
    <div>
      <div>
        <h2>Helping people across the care continuum</h2>
        <br>
        <p style="border-bottom: 2px solid #3d3b7c;">MedicalProducts is always innovating to deliver healthcare providers and distributors from hospital to home, flexible supply chain solutions, superior service, and value-based medical products that enhance the safety and productivity of the healthcare community.</p>
        <br>
      </div>
        <transition-group name='fade' tag='div'>
        <div v-for="i in [currentIndex]" :key='i'>
          <div v-if="i==0">
            <img :src="currentImg" style="width: 50%;" />
            <h3 style="border-bottom: 2px solid #3d3b7c;">Hospitals & Surgery Products</h3>
          </div>
          <div v-if="i==1">
            <img :src="currentImg" style="width: 50%;" />
            <h3 style="border-bottom: 2px solid #3d3b7c;">Long Term and Home Health Care</h3>
          </div>
          <div v-if="i==2">
            <img :src="currentImg" style="width: 50%;" />
            <h3 style="border-bottom: 2px solid #3d3b7c;">Medical Imaging</h3>
          </div>
          <div v-if="i==3">
            <img :src="currentImg" style="width: 50%;" />
            <h3 style="border-bottom: 2px solid #3d3b7c;">Orthopedics Products</h3>
          </div>
        </div>
        </transition-group>
        <a class="prev" @click="prev" href='#'>&#10094;</a>
        <a class="next" @click="next" href='#'>&#10095;</a>
     
    </div>
    
</template>

<script>
/*eslint-disable*/
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        'http://localhost:8080/slider1.jpg',
        'http://localhost:8080/slider2.jpg',
        'http://localhost:8080/slider3.jpg',
        'http://localhost:8080/slider4.jpg'
        ],
      timer: null,
      currentIndex: 0,
    }
  },
  
    mounted: function() {
      this.startSlide();
    },
  
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 20000);
      },
  
  
      next: function() {
          if(this.currentIndex == 3){
              this.currentIndex = 0;
          }else{
        this.currentIndex += 1;
          }
      },
      prev: function() {
          if(this.currentIndex==0){
              this.currentIndex = 3;
          }else{
            this.currentIndex -= 1;
          }
      }
    },
  
    computed: {
      currentImg: function() {
        return this.images[this.currentIndex];
      }
    }
  
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}
img {
height:auto;
width:100%;
  }
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 70%;
  width: auto;
  padding: 16px;
  color: white;
  background-color: rgba(0,0,0,0.9);
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 5%;
}
.prev {
  left: 5%;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(46,49,146,255);
  color:white;
}
</style>