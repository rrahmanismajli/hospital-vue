<template>
    <div id="slider">
        <Slider></Slider>
        <Doctor></Doctor>
        
    </div>
</template>

<script>
import Slider from '@/components/SliderComp.vue';
//import Doctor from '@/components/main/DoctorComponent.vue'
export default {
  name: 'sliderComp',
  components: {
    Slider,
    //Doctor
  }
}
</script>


<style scoped>
    #slider{
        padding-left:5%;
        padding-right:5%;
        padding-top:1%;
        padding-bottom:1%;
    }
</style>