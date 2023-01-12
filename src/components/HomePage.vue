<template>
    <div class="home">
        <h1 class="display-1 text-center container-fluid justify-content-center d-flex align-items-center">Mu-een Slamat</h1>
        <h2>Aspiring Web Developer</h2>
    </div>
</template>

<script>
    export default {
        name: 'HomePage'
    }
</script>

<style scoped>
.home {
    padding: 200px 0;
    height: 85vh;
}
h1 {
  color:yellow;
  text-align: center;
  font-family: monospace;
  font-weight: 600;
  text-shadow:  4px 4px 5px  #1463f3;
  animation: fadeIn 7s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
h2{
    color: #737ccf;
    text-align: center;
    font-family: monospace;
    font-weight: 500;
    text-shadow: 3px 3px 4px #1463f3;
    animation: fadeIn 8s;
}
</style>