<template>
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
    position: relative;
    perspective: 100px;
}

.container:hover {
    transform: rotateY('180deg');
}
.card {
    height: 100%;
    width: 100%;
    position: relative;
    transition: 60s;
    transform-style: preserve-3d;
}

.card:hover {
    cursor: pointer;
    transform:rotateY('180deg')
}
.front , .back{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.me{
    max-width: 100%;
    border-radius: 2rem;
    object-fit: cover;
}

.back {
    transform: rotateY('180deg');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>