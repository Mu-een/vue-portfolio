<template>
    <NavBar/>
    <AboutPage />
    <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AboutPage from '@/components/AboutPage.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name: 'AboutView',
        components: {
            NavBar,
            AboutPage,
            Footer
        }
    }
</script>

<style scoped>

</style>