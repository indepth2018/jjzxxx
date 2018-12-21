<style lang='stylus'>
.every-carousel
    .carousel-img
        width 400px
        height 190px
        cursor pointer
        background #506b9e

    .carousel-content
        text-align center
        padding-top 10px
</style>

<template>
    <Carousel autoplay loop :height="290" v-model="value" :autoplay-speed="4000">
        <CarouselItem>
            <div class="every-carousel">
                <div class="carousel-img"></div>
                <div class="carousel-content">1</div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="every-carousel">
                <div class="carousel-img"></div>
                <div class="carousel-content">2</div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="every-carousel">
                <div class="carousel-img"></div>
                <div class="carousel-content">3</div>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="every-carousel">
                <div class="carousel-img"></div>
                <div class="carousel-content">4</div>
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return { value: 0 };
    },
    computed: {},
    methods: {}
};
</script>