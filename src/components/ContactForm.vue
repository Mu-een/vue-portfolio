<template>
    <form action="https://formspree.io/f/xjvdvznl" method="POST" class="w-50 m-5 text-center form">
        <div class="mb-3">
       <label for="fname" class="form-label fname">Name</label>
       <input type="text" name="name" class="form-control" placeholder="Type your name here .." required>
       <label for="lname" class="form-label lname">Last Name</label>
       <input type="text" name="lastName" class="form-control" placeholder="Type your last name here .." required>
     </div>
     <div class="mb-3">
       <label for="message" class="form-label msgBox">Message</label>
       <textarea class="form-control" rows="3" placeholder="Type your message here .." required></textarea>
     </div>
     <div>
        <button type="submit button">Send <i class="bi bi-hand-thumbs-up text-light"></i></button>
     </div>
    </form>

    <div class="socials text-center">
        <i class="bi bi-geo-alt text-light location-icon"> Cape Town, South Africa</i>
        <i class="bi bi-envelope text-light email-icon d-flex">mueenslam@gmail.com</i>
        <a href="https://www.linkedin.com/in/mueenslamat" target="_blank"><i class="bi bi-linkedin linkedin-icon"></i></a>
    </div>

</template>

<script>
    export default {
        name: 'ContactForm'
    }
</script>

<style scoped>
form{
    font-family: monospace;
    font-size: 21px;
    display: inline-block;
}
.fname, .lname, .msgBox{
    color: #737ccf;
    margin-top: 15px;
}

button{
    background-color: #1d2023;
    color: #ccd0d8;
}
button:hover {
    background-color: #737ccf;
    color: black;
}

.socials{
    display:inline-block;
    font-family: monospace;
    max-width: 400px;
    margin: 120px;
}
.location-icon {
    font-size: 25px;
}

.email-icon {
    font-size: 25px;
}
.linkedin-icon{
    color: #737ccf;
    font-size: 2rem;
}

.linkedin-icon:hover {
    color:#1463f3 ;
    cursor: pointer;
}
</style>