<template>
    <NavBar />
    <Projects />
    <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Projects from '@/components/Projects.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name:'ProjectsView',
        components: {
            NavBar,
            Projects,
            Footer
        }
    }
</script>

<style scoped>

</style>