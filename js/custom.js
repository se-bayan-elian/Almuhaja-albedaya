$(function () {
  //variable declarations 
  var courses_sec_scroll = $(".courses-sec").offset().top +500;
  var stats_sec_scroll = $(".stats-sec").offset().top +500;
  const jobs_sec_scroll = $(".jobs-sec").offset().top +500;
  const about_sec_scroll = $(".about-us-sec").offset().top +500;
  const contact_sec_scroll = $(".contact-us-sec").offset().top +500;
  // plugins activation 
  // -- owl carousel --
  $(".owl-carousel").owlCarousel({
    items : 1,
    margin : 20,
    nav : true ,
    rtl: true,
    dotsEach : true ,
  
  });
  document.querySelector(".owl-nav .owl-prev").innerHTML = `<span class="fa-solid fa-arrow-up"></span>`;
  document.querySelector(".owl-nav .owl-next").innerHTML = `<span class="fa-solid fa-arrow-down" aria-label="Next"></span>`;
  // -- validation js plugin 
  $("#contact-form").validate({
    rules : {
      FullName :{
        required : true ,
        minlength : 8,

      },
      contact_email :{
        email : true,
      },
      contact_phone : {
        phone : true ,
        length : 10,
      },
      contact_message :{
       required : true ,
       minlength : 10,
      },
   
    },
    messages:{
      FullName:{
        required : "يرجى إدخال الاسم كاملاً",
        minlength : "يجب أن يكون على الأقل مكوناً من 8 أحرف",

      },
      contact_email :{
        email : "الرجاء إدخال الإيميل بالشكل الصحيح",
        required : "هذا الحقل مطلوب"
      },
      contact_phone : {
        required : "هذا الحقل مطلوب",
        phone : "الرجاء إدخال رقم الهاتف" ,
        length : "الرجاء التأكد من صحة رقم الهاتف",
      },
      contact_message :{
        required : "يجب أن ترفق رسالتك" ,
        minlength : "يجب أن تتكون من 10 حروف على الأٌقل",
      },
     
    },
    submitHandler: function(form) {
   
     
      $(form).submit();
    }
   });
   $("#login-form").validate({
    rules : {

      login_email :{
        required : true,
        email : true ,
      },
      login_password :{
        required : true,
        minlength : 8,
      },
    },
    messages:{
      login_email :{
        required : "الرجاء إدخال بريد إلكتروني",
        email : "الرجاء إختيار بريد إلكتروني صالح" ,
      },
      login_password :{
        required : "الرجاء إدخال كلمة السر",
        minlength : "يجب أن تتكون على الأقل من 8 أحرف",
      },
      
    },
    submitHandler: function(form) {
   
     
      $(form).submit();
    }
   });
  
  
  //  set methods when scroll
  $(window).on("scroll",function(){
    var currentScroll = $(window).scrollTop();
    // set fixed navbar 
    if(currentScroll >=36){
      $(".navbar-sec").addClass("fixed-nav");
      $(".carousel-sec").css("marginTop","112px");
    }else{
      $(".navbar-sec").removeClass("fixed-nav");
      $(".carousel-sec").css("marginTop","0px");
    }

    // set sections loading animation
       // -- stats-section 
       if(currentScroll >=stats_sec_scroll -200){
        $(".stats-sec").addClass("animate__animated animate__fadeIn ").css("visibility","visible");;
        $(".stats-sec .box").addClass("animate__animated animate__lightSpeedInRight ");
       }
      //  -- courses-sec 
      if(currentScroll >=courses_sec_scroll -200){
        $(".courses-sec").addClass("animate__animated animate__fadeIn ").css("visibility","visible");;
        $("#course-1").addClass("animate__animated animate__fadeInTopRight ");
        $("#course-2").addClass("animate__animated animate__fadeInUp ");
        $("#course-3").addClass("animate__animated animate__fadeInTopLeft ");
      }
      //  -- about-us-sec 
      if(currentScroll >=about_sec_scroll -200){
        $(".about-us-sec").addClass("animate__animated animate__flash ").css("visibility","visible");;
      }
      //  -- jobs-sec 
      if(currentScroll >=jobs_sec_scroll -200){
        $(".jobs-sec").addClass("animate__animated animate__pulse ").css("visibility","visible");;
      }
      //  -- contact-us-sec 
      if(currentScroll >=contact_sec_scroll -200){
        $(".contact-us-sec").addClass("animate__animated animate__pulse ").css("visibility","visible");;
      }
      });
  // followed for loading sections animation 
  //  -- main-header 
  $(".social-media").addClass("animate__animated animate__fadeInDown").css("visibility","visible");
  $(".navbar-sec").addClass("animate__animated animate__fadeInDown").css("visibility","visible");
  // -- carousel section 
  $(".carousel-sec").addClass("animate__animated animate__flipInY").css("visibility","visible");
  
  // set navbar links when click it 
    $("#courses-link").on("click",function(){
        $("html").animate({
          scrollTop : courses_sec_scroll ,
        },800);
    });
    $("#stats-link").on("click",function(){
        $("html").animate({
          scrollTop : stats_sec_scroll ,
        },800);
    });
    $("#jobs-link").on("click",function(){
        $("html").animate({
          scrollTop : jobs_sec_scroll ,
        },800);
    });
    $("#about-us-link").on("click",function(){
        $("html").animate({
          scrollTop : about_sec_scroll ,
        },800);
    });
    $("#contact-us-link").on("click",function(){
        $("html").animate({
          scrollTop : contact_sec_scroll ,
        },800);
    });

  });
// set loading screen 
$(window).on("load",function(){
  $(".loading").fadeOut(1000,function(){
    $(this).remove();
  });  
});
