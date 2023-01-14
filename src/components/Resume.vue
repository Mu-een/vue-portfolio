<template>
<div class="container">
    <div class="myResume text-center" v-for="items in experience" :key="items">
        <h2>{{ items.institute }}</h2>
        <p>{{ items.year }}</p>
        <p>{{ items.qualification }}</p>
    </div>
</div>

<div class="container2 mx-auto">
    <h2 class="skills text-center mt-5">Skills:</h2>
</div>

<div class="skill-bar">
    <label for="">HTML</label>
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 70%"><b>70%</b></div>
    </div>
    <label for="">CSS</label>
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%"><b>60%</b></div>
    </div>
    <label for="">Bootstrap</label>
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 50%"><b>50%</b></div>
    </div>
    <label for="">JavaScript</label>
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 40%"><b>40%</b></div>
    </div>
    <label for="">Vue.js</label>
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 30%"><b>30%</b></div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Resume',
    data(){
        return {
            experience: [
                {
                    institute:"Belgravia High School",
                    year:"2013 - 2017",
                    qualification:"Student"
                },
                {
                    institute:"Open Box",
                    year:"October 2019 - January 2020",
                    qualification:"Junior IT Technician"  
                },
                {
                    institute:"College of Cape Town - Crawford",
                    year:"2021",
                    qualification:"CCNA & I.T. Essentials"
                },
                {
                    institute:"Life Choices Academy",
                    year:"Currently",
                    qualification:"Web Development and Programming"
                }
            ]
        }
    }
    }
</script>

<style scoped>

.container {
    margin-top: 60px;
}
.myResume {
    color:#ccd0d8;
    font-family: monospace;
    text-shadow: 3px 3px 5px #84a4fc ;
    margin-top: 30px;
    padding: 20px;
    border: 5px solid yellow;
    box-shadow: 5px 5px 6px #84a4fc;
}
p {
    font-size: 25px;
}
.skills {
    color: #84a4fc;
    font-family: monospace;
    text-shadow: 3px 3px 5px #1463f3;
    animation: random 2s infinite;
}
@keyframes random {
    0% {
        color: #1463f3;
    }
    50% {
        color: yellow;
    }
    100% {
        color: #1463f3;
    }
}
.container2 {
    width: 100px;
}
.skill-bar {
    margin: 100px;
}

label {
    color:#84a4fc;
    font-family: monospace;
}
.progress {
    height: 35px;
    box-shadow: 3px 3px 4px #1463f3;
}
.progress-bar {
    background-color: #84a4fc;
    color: #1d2023;
    font-family: monospace;
    
}
</style>