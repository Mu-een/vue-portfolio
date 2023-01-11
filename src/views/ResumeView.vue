<template>
    <NavBar />
    <Resume />
    <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Resume from '@/components/Resume.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name: 'ResumeView',
        components:{
            NavBar,
            Resume,
            Footer
        }
    }
</script>

<style scoped>

</style>