$(function () {

  $(".home-logo").addClass('enter');

  $('.home-cover').click(hideForms);

  $('.btn-i-eat').click(showEatForm);
  $('.btn-i-cook').click(showCookForm);

  $('.btn-send-cook').click(sendCookEmail);

});


function showCookForm(e) {
  $('.home-cover').show();
  $('.home').css({
    marginLeft: '50%'
  });
  $(".home-logo").addClass('finish');
}

function showEatForm(e) {
  $('.home-cover').show();
  $('.home').css({
    marginLeft: '-50%'
  });
  $(".home-logo").addClass('finish');
}

function hideForms(e) {
  $('.home-cover').hide();
  $('.home').css({
    marginLeft: '0'
  });
  $(".home-logo").addClass('finish');
}

function sendCookEmail() {
  $('.form-cook form').submit();
}

$('form').submit(function(e){
  e.preventDefault();
  $('.signup-success').addClass('animated zoomIn').show();
  $('form').hide();
  $.ajax({
    url: '/leads/signup',
    type:'post',
    data:$(this).serialize(),
    success:function(){
      hideForms(e);

      setTimeout(function() {
        $('.signup-success').removeClass('animated zoomIn').hide();
        $('form').show();
      }, 2000);
      //document.location.reload();
    }
  });
});