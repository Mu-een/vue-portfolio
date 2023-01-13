<template>
    <div class="theProjects">
        <div v-for="items in myProjects" :key="items" class="card" style="width: 18rem;">
          <img :src="items.image" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">{{ items.name }}</h5>
          </div>
          <div class="card-body">
            <a :href=items.GitHub target="_blank"><button class="btn1">GitHub<i class="bi bi-github"></i></button></a>
            <a :href=items.Netlify target="_blank"><button class="btn2">Netlify<i class="bi bi-globe"></i></button></a>
          </div>
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
                    image:"https://i.postimg.cc/CMHMYDGF/myport.png",
                    name:"Bootstrap Portfolio",
                    GitHub:"https://github.com/Mu-een/portfolio1.git",
                    Netlify:"https://mueenslamat-portfolio1.netlify.app/"
                },
                {
                    image:"https://i.postimg.cc/gJ85VVzr/jscalc.png",
                    name:"JS Calculator",
                    GitHub:"https://github.com/Mu-een/calculator.git",
                    Netlify:"https://mueen-calculator.netlify.app/"
                },
                {
                    image:"https://i.postimg.cc/MHnwN3mp/jseomp.png",
                    name:"JS E-commerce website",
                    GitHub:"https://github.com/Mu-een/JS-Project.git",
                    Netlify:"https://mueenjsproject.netlify.app/"
                },
                {
                    image:"",
                    name:"4",
                    GitHub:"",
                    Netlify:""
                },
                {
                    image:"",
                    name:"5",
                    GitHub:"",
                    Netlify:""
                },
                {
                    image:"",
                    name:"6",
                    GitHub:"",
                    Netlify:""
                }
            ]

        }
    }
    }
</script>

<style scoped>
.theProjects {
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
    font-family: monospace;
}
.card {
    box-shadow: 5px 5px 6px #84a4fc;
}
.btn1 {
    margin-right: 30px;
}
.btn1:hover {
    background-color: yellow;
    color: black;
}
.btn2 {
    margin-left: 45px;
}
.btn2:hover {
    background-color: yellow;
    color: black;
}
@media screen and (max-width: 280px) {
   .btn2 {
        margin-left: 60px;
   } 
}
</style>