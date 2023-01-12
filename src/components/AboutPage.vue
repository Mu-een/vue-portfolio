<template>
    <div class="container">
        <div class="card">
            <div class="front">
                <img src="https://i.postimg.cc/htYNktT9/me.jpg" alt="" class="me">
            </div>
            <div class="back">
                <p> I am a 23 year old learning everything needed to be able to be the best version of myself as a web developer.
                I am born and bred in Cape Town, South Africa.Currently residing in Athlone.
                I am a car enthusiast and pop culture fan. I try to stay active by playing soccer, cricket and rugby. I play video games in my free time.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AboutPage'
    }
</script>

<style scoped>

.container {
    width: 30vw;
    height: 90vh;
    margin: auto;
    margin-top: 29px;
    position: relative;
    perspective: 650px;
}

.container:hover > .card{
    cursor: pointer;
    transform: rotateY(180deg);
}
.card {
    height: 100%;
    width: 100%;
    position: relative;
    transition: transform 1700ms;
    transform-style: preserve-3d;
}

.front , .back{
    position: absolute;
    border-radius: 3rem;
    box-shadow: 0 0 6px 2px yellow;
    width: 30vw;
    height: 80vh;
    backface-visibility: hidden;
}

.me{
    max-width: 30vw;
    height: 80vh;
    border-radius: 2rem;
    object-fit: cover;
}

.back {
    font-family: monospace;
    background-color: yellow;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>