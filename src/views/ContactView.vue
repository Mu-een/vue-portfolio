<template>
    <NavBar />
    <ContactForm />
    <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name: 'ContactView',
        components: {
            NavBar,
            ContactForm,
            Footer
        }
    }
</script>

<style scoped>

</style>