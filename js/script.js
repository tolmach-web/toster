
let parent = document.querySelector('#places');
let links  = parent.querySelectorAll('.naver a');
let tabs   = parent.querySelectorAll('.tab');


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        let activeLink = parent.querySelector('.naver a.active');
        activeLink.classList.remove('active');
        
        let activeTab = parent.querySelector('.tab.active');
        activeTab.classList.remove('active');
        
        tabs[i].classList.add('active');
        this.classList.add('active');
        
        event.preventDefault();
    });
}


$('.header__burger').click(function(event) {
  $('.header__burger,.header__menu').toggleClass('active');
  $("a[href^='#']").click(function(){
    if($('.header__burger,.header__menu').hasClass('active')){
      $('.header__burger,.header__menu , .btn').toggleClass('active');
    }
  });
  $("a[href^='#l']").click(function(){
    if($('.header__burger,.header__menu').hasClass('active')){
      $('.header__burger,.header__menu , .btn').toggleClass('active');
    }
  });
});


//modal

$('[data-modal=consultion]').on('click', function(){
  $('.overplay, #consultion').fadeIn();
});
$('.modal__close').on('click',function(){
  $('.overplay, #consultion, #thanks').fadeOut();
});

$('#consultion-from').validate({
  rules: {
    name: "required",
    phone: "required"
  },
  messages: {
    name: "Пожалуста, введите свое имя",
    phone: "Пожалуста, введите свой номер телеофна"
  }
});

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      // $('#consultation, #order').fadeOut();
      // $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});



$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $('html, body').animate({scrollTop: $(_href).offset().top -85
  },{
    duration: 1500
  });
  return false

});
