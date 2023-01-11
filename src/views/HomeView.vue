<template>
    <div class="home-page">
    <NavBar />
    <HomePage />
    <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HomePage from '@/components/HomePage.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name: 'HomeView',
        components: {
            NavBar,
            HomePage,
            Footer
        }
    }
</script>

<style scoped>
.home-page {
    background-image: url(https://i.postimg.cc/T1yWkwjV/stars-28.png);
}
</style>