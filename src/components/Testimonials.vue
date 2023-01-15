<template>
    <div class="peers">
        <div v-for="items in myTestimonials" :key="items" class="card" style="width: 18rem;">
      <img :src= "items.image"  class="card-img-top mx-auto mt-5 image" style="width: 15rem;" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">{{ items.name }}</h5>
        <p class="card-text">{{ items.testimonial }}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Testimonials',
    data(){
        return {
            myTestimonials: [
                {   
                    image:"https://i.postimg.cc/fR0YfGLR/Joel-Profile.jpg",
                    name:"Joel Mukanya - Lecturer",
                    testimonial:"Mu-een is a very creative, and well-behaved student. He does enjoy working with his classmates and works well on his project. He has gained knowledge of web development, including Bootstrap 5. I will be very delighted to see him get hired as a developer."
                },
                {   
                    image:"https://i.postimg.cc/nVGjKvtg/Meezaan-Profile.jpg",
                    name:"Meezaan Davids - Peer",
                    testimonial:"Mu-een is a really calm and open guy. He has a really calming personality and is a person who would help you if needed.He is good at football and his coding skills are on a upward trajectory."
                },
                {   
                    image:"https://i.postimg.cc/tTcZygxK/cassidyprofile.png",
                    name:"Cassidy Lawrence - Peer",
                    testimonial:"For the past 2 years knowing Mu-een I've grown to learn that his a very talented and hard working individual ,he has a great personality that could brighten up your day ,yet he has a calming aura about him.His always there to support and motivate others and on top of that his also a great Developer.Continuously always coming up with new and interesting ideas. His a great team player always brings his part and has the ability to work unsupervised and still deliver great work."
                },
                {  
                    image:"https://i.postimg.cc/g0wXW5Q6/Faeez-Profile.jpg",
                    name:"Faeez Miller - Peer",
                    testimonial:"Mu-een Slamat is a hardworking person meaning that he is committed to the task at hand and never lets anything get in his way.He is a hardworking person that will go above and beyond what most people would do in order to complete something successfully."
                },
                {   
                    image:"https://i.postimg.cc/NFpBXBLM/t0.jpg",
                    name:"Imraan Bernksen - Peer",
                    testimonial:"Mu-een is a very passionate person, always attentive and enthusiastic. He's is a very friendly person to be around, keen to help out and interact with people.He has a funny side, he encourages his peers to be their best and it's a pleasure to work with him."
                },
                {   
                    image:"https://i.postimg.cc/HnCVzYp9/C11-Brogan-Gys-3.jpg",
                    name:"Brogan Gys - Peer",
                    testimonial:"Mu-een is someone who never avoids a problem he would make sure to overcome all challenges that come his way, I am sure that this is an essential trait for all companies to look for in a employee, he also has great communication skills and is someone that works well within a team."
                }
            ]
        }
    }
    }
</script>

<style scoped>
.peers{
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
    font-family: monospace;
}
.card {
  box-shadow: 5px 5px 6px #84a4fc ;
  animation: changeIt 3s infinite;
}
@keyframes changeIt {
    0% {
        box-shadow: 5px 5px 6px #84a4fc ;
    }
    50% {
        box-shadow: 5px 5px 6px yellow;
    }
    100% {
        box-shadow: 5px 5px 6px #84a4fc;
    }
}
</style>