<template>
    <div class="aboutMe">
        <div class="container">
            <div class="card">
                <div class="front">
                    <img src="https://i.postimg.cc/htYNktT9/me.jpg" alt="" class="me">
                </div>
                <div class="back">
                    <p>Back</p>
                </div>
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
.aboutMe{
    margin: 60px;
    margin-bottom: 60px;
    padding: 30px;
    background-color: #1463f3;
}
.container {
    width: 30vw;
    height: 90vh;
    margin: auto;
    position: relative;
    perspective: 100px;
}

.card {
    height: 100%;
    width: 100%;
    position: relative;
    transition: 60s;
}

.front , .back{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.front {
    z-index: 10;
}

.me{
    max-width: 100%;
    border-radius: 2rem;
    object-fit: cover;
}

.back {
    background-color: blueviolet;
    display: flex;
    flex-flow:column wrap ;
    justify-content: center;
    align-items: center;
}

.container:hover .front {
    transform: rotateY('180deg') rotateZ('180deg')
    
}
</style>