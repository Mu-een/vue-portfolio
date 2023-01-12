<template>
    <div v-for="items in myProjects" :key="items" class="card" style="width: 18rem;">
  <img :src="items.image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ items.name }}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-body">
    <a :href=items.GitHub target="_blank"><button>GitHub</button></a>
    <a :href=items.Netlify target="_blank"><button>Netlify</button></a>
  </div>
</div>
</template>

<script>
    export default {
        name: 'Projects',
    data(){
        return {
            myProjects:[
                {
                    image:"",
                    name:"Bootstrap Portfolio",
                    GitHub:"",
                    Netlify:""
                },
                {
                    image:"",
                    name:"JS Calculator",
                    GitHub:"https://github.com/Mu-een/calculator.git",
                    Netlify:""
                },
                {
                    image:"",
                    name:"",
                    GitHub:"",
                    Netlify:""
                },
                {
                    image:"",
                    name:"",
                    GitHub:"",
                    Netlify:""
                },
                {
                    image:"",
                    name:"",
                    GitHub:"",
                    Netlify:""
                },
                {
                    image:"",
                    name:"",
                    GitHub:"",
                    Netlify:""
                }
            ]

        }
    }
    }
</script>

<style scoped>

</style>