

$(document).ready(function(){  
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false,
      appendDots:'.slider-dots',
      dotsClass: 'dots',
      pauseOnHover: false
  });

  let hamburger = document.querySelector('.hamburger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');
  let work = document.querySelectorAll('.list a');

  hamburger.addEventListener('click', function(e) {
    mobileNav.classList.add('open');
  })

  times.addEventListener('click', function(e) {
    mobileNav.classList.remove('open');
  })

  for (i = 0; i < work.length; i++) {
  work[i].addEventListener('click', function(e) {
    mobileNav.classList.remove('open');
  })
}

});



$(".meter > span").each(function () {
    $(this)
      .data("origWidth", $(this).width())
      .width(0)
      .animate(
        {
          width: $(this).data("origWidth")
        },
        1200
      );
  });

  // var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //          user: 'work.prakharvasistha@gmail.com',			//email ID
  //        pass: 'eiekorgsqjuxkhag'				//Password 
  //      }
  //  });
  //  function sendMail(email , otp){
  //    var details = {
  //      from: 'work.prakharvasistha@gmail.com', // sender address same as above
  //      to: email, 					// Receiver's email id
  //      subject: 'RTO App OTP ', // Subject of the mail.
  //      html: otp					// Sending OTP 
  //    };
   
   
  //    transporter.sendMail(details, function (error, data) {
  //      if(error)
  //        console.log(error)
  //      else
  //        console.log("OTP Sent!!!");
  //      });
  //    }
     //  var email = "vasistha.prakhar@gmail.com";
  //  var otp = "123456";
  //  sendMail(email,otp);	
  

      function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "work.prakharvasistha@gmail.com",
      Password: "eiekorgsqjuxkhag",
      To: 'vasistha.prakhar@gmail.com',
      From: "work.prakharvasistha@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }