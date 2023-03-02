<template>
    <div id="slider">
        <Slider></Slider>
    </div>
</template>

<script>
import Slider from '@/components/SliderComp.vue'
export default {
  name: 'sliderComp',
  components: {
    Slider
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