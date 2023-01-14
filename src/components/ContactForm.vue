<template>
    <div class="container-fluid">
        <form action="https://formspree.io/f/xjvdvznl" method="POST" role="form" class="w-75 m-5 mx-auto text-center form">
            <div class="mb-3 row">
                <div class="col-md-6 form-group">
                    <label for="fname" class="form-label fname">First Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Type your name here .." required="required" data-error="First Name is needed">
                    <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-6 form-group">
                    <label for="lname" class="form-label lname">Last Name</label>
                    <input type="text" name="lastName" class="form-control" placeholder="Type your last name here .." required="required" data-error="Last is needed">
                    <div class="help-block with-errors"></div>
                </div>
         </div>
         <div class="mb-3">
           <label for="message" class="form-label msgBox">Message</label>
           <textarea class="form-control" rows="3" placeholder="Type your message here .." required="required"></textarea>
         </div>
         <div>
            <button type="submit button">Send <i class="bi bi-arrow-right"></i></button>
         </div>
        </form>
    </div>

    <div class="socials text-center mx-auto container">
        <i class="bi bi-geo-alt text-light location-icon "> Cape Town, South Africa</i>
        <i class="bi bi-envelope text-light email-icon d-block">mueenslam@gmail.com</i>
        <a href="https://www.linkedin.com/in/mueenslamat" target="_blank"><i class="bi bi-linkedin linkedin-icon"></i></a>
        <a href="https://twitter.com/mueenslamat" target="_blank"><i class="bi bi-twitter twitter-icon"></i></a>
        <a href="https://www.instagram.com/mueenslamat/" target="_blank"><i class="bi bi-instagram instagram-icon"></i></a>
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
    margin-bottom: 60px;
}
.fname, .lname, .msgBox{
    color: #737ccf;
    margin-top: 15px;
}
.form-control {
    box-shadow: 3px 3px 4px yellow;
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
    font-family: monospace;
    margin: 120px;
}
.location-icon , .email-icon{
    font-size: 25px;
}
.linkedin-icon, .twitter-icon, .instagram-icon{
    color: #737ccf;
    font-size: 2rem;
    margin-right: 20px;
    margin-left: 30px;
}

.linkedin-icon:hover , .twitter-icon:hover, .instagram-icon:hover{
    color:yellow;
    cursor: pointer;
}
@media screen and (min-width:200px) {
    .socials i {
        font-size: 20px;
    }
}
</style>