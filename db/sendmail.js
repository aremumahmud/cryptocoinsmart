var nodemailer = require('nodemailer');
const html = `<html>
     
    <head>
        <meta charset="utf-8">
        <title>Cryptocoinsmart - Login</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Free HTML Templates" name="keywords">
        <meta content="Free HTML Templates" name="description">
    
        <!-- Favicon -->
        <link href="img/favicon.ico" rel="icon">
    
        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
        <!-- Font Awesome -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    
        <!-- Libraries Stylesheet -->
        <link href="https://cryptocoinsmart.crypsc.repl.co/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    
        <!-- Customized Bootstrap Stylesheet -->
        <link href="https://cryptocoinsmart.crypsc.repl.co/css/style.css" rel="stylesheet">
      <style>.goog-te-banner-frame.skiptranslate {display: none !important;} 
body { top: 0px !important; }</style>
        <style>
            .input{
              border-radius: 10px !important;
              border: 1px solid #1F1F2E !important;
    
            }
            .center {
               display: flex;
               justify-content: center;
               align-items: center;     
               flex-direction: column;
               height: 150%;
           }
           .trans{
               background: none;
           }
           .orange{
               background-color: #FF4800;
           }
          
    @media only screen and (min-width: 600px) {
          .space{
            padding-left:80px ;
            padding-right: 80px;
          }
    }
        </style>
    </head>
    
       <body>
            <div class="container-fluid bg-dark">
            <div class="row py-2 px-lg-5">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center text-white">
                        <small><i class="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                        <small class="px-3">|</small>
                        <small><i class="fa fa-envelope mr-2"></i>info@example.com</small>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-lg-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-white px-2" href="">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="text-white px-2" href="">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="text-white pl-2" href="">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <a href="http://cryptocoinsmart.crypsc.repl.co/" class="navbar-brand ml-lg-3">
                    <h4 class="m-0 display-5 text-uppercase text-primary"><i class="fa fa-bitcoin mr-2"></i>Cryptocoinsmart</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div><div id="google_translate_element"></div>
        
            <div class="container-fluid  center">
          <h4 style='text-align:center'>welcome to our wonderful investment platform. <br>Sign in with the button below to get started<br>
 <a style='text-align:center;padding:10px' href='http://cryptocoinsmart.crypsc.repl.co/pages/login'> Sign in</a> </div> </h4>
 </div>
                    <hr>
                    
                       <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
            <div class="row pt-5">
                <div class="col-lg-7 col-md-6">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <h3 class="text-primary mb-4">Get In Touch</h3>
                                                    <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                            <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                            <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                            <div class="d-flex justify-content-start mt-4">    <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                                        <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>                    <div class="col-md-6 mb-5">
                            <h3 class="text-primary mb-4">Quick Links</h3>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>     <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                                <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Services</a>   <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Pricing Plan</a>
                                <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                    </div>
        </div>
                            
                      <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: #3E3E4E !important;">
            <div class="row">
                <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0 text-white">&copy; <a href="#">Your Site Name</a>. All Rights Reserved. 	Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
                <div class="col-lg-6 text-center text-md-right">
                    <ul class="nav d-inline-flex">
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Privacy</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Terms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">FAQs</a>
                        </li> 
                         <li class="nav-item">
                            <a class="nav-link text-white py-0" href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
          </body>
          </html>
             <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
           <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    
        <!-- Contact Javascript File -->
        <script src="mail/jqBootstrapValidation.min.js"></script>
        <script src="mail/contact.js"></script>
    
        <!-- Template Javascript -->
      <script>
          document.getElementById('submit').onclick = function(){
              window.location = '/login'
          }
      </script>
      
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>`
function sendmail (email , dashboard_id){
  var transporter = nodemailer.createTransport({
  service: 'SendinBlue',
  auth: {
    user: 'aremumahmud2003@gmail.com',
    pass: 'tdpX1JH0ITcRgYKn'
  }
});

var mailOptions = {
  from: 'CryptoCoinSmart@gmail.com',
  to: email,
  subject: 'Welcome email from CryptoCoinSmart !',
  
  html 
 //    `
  
 //  <div style='width:100%'>
 //  <h4 style='text-align:center'>welcome to our wonderful investment platform. <br>Sign in with the button below to get started </h4><br>
 // <a style='text-align:center;padding:10px;border-radius:10px' href='http://cryptocoinsmart.crypsc.repl.co/pages/login'> Sign in</a> </div>
 //  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
}

module.exports = sendmail