
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
      <div class="row mt-5 p-3" style="background-color: #3b5a7c; color: #fff; border-radius: 8px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <br><br>
        <h2>Your everyday needs. Our unique capabilities.</h2>
        <br>
        <div class="col-md-4 text-center">
          <img src="http://localhost:8080/services.png" style="width: 50%; margin-bottom: 5%;" alt="">
          <br>
          <h4><b>CUSTOMER-FIRST SERVICE</b></h4>
          <p>Friendly, experienced support</p>
          <p>U.S.-based, in-house help</p>
          <p>Exceptional responsiveness</p>
        </div>
        <div class="col-md-4">
          <img src="http://localhost:8080/pricing.png" style="width: 50%; margin-bottom: 5%;" alt="">
          <br>
          <h4><b>EASY ORDERING, YOUR WAY</b></h4>
          <p>Contract pricing—affiliated with major IDNs and GPOs</p>
          <p>Volume discounts</p>
          <p>Order by web, phone, email, fax, or EDI</p>
        </div>
        <div class="col-md-4">
          <img src="http://localhost:8080/truck.png" style="width: 50%; margin-bottom: 5%;" alt="">
          <br>
          <h4><b>IN STOCK & READY TO SHIP</b></h4>
          <p>Thousands of items ready to ship</p>
          <p>Same-day shipping on in-stock items ordered by 3 p.m. EST</p>
          <p>No minimum requirements—ever!</p>
        </div>
      </div>
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