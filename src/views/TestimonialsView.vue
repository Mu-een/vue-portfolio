<template>
    <NavBar />
    <Testimonials />
    <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Testimonials from '@/components/Testimonials.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name: 'TestimonialsView',
        components:{
            NavBar,
            Testimonials,
            Footer
        }
    }
</script>

<style scoped>

</style>