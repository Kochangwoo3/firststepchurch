$(function(){
  /* Mobile Ui & Wireframe Transition */
  $('.open-navi').click(function(){
    $(this).addClass('active')
    $('.close-navi').addClass('active')
    $('.front-wire').fadeOut()
    $('.back-ui').fadeIn()
  })
  $('.close-navi').click(function(){
    $(this).removeClass('active')
    $('.open-navi').removeClass('active')
    $('.back-ui').fadeOut()
    $('.front-wire').fadeIn()
  })
})