<template>
     <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mt-4" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
            <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/testimonials">Testimonials</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
nav {
    font-family: monospace;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
    text-decoration: none;
    color: #ccd0d8;
    box-shadow: inset 0 0 0 0 #1463f3;
    padding: 0 .25rem;
    margin: 0 .25rem;
    transition: color .7s ease-in-out, box-shadow .3s ease-in-out;
    border-radius: 5px;
    font-size: 19px;
}
a:hover {
    color: #1d2023;
    box-shadow: inset 200px 0 0 0 #84a4fc;
    border-radius: 5px;
}
.toggle {
    color:#1463f3;
    background-color: #84a4fc;
}

a.router-link-active{
  background-color: #84a4fc;
  color: #1d2023;
}
</style>