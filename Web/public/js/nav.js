$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

$(window).load(function() {

  $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
})
// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

// contact section 
// Check for valid email syntax
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function closeForm() {
    document.contactform.name.value = '';
    document.contactform.email.value = '';
    document.contactform.message.value = '';
  
    $('.email').removeClass('typing');
    $('.name').removeClass('typing');
    $('.message').removeClass('typing');
  
    $('.cd-popup').removeClass('is-visible');
    $('.notification').addClass('is-visible');
    $('#notification-text').html("Thanks for contacting us! We'll get back to you soon.");
  }
  
  $(document).ready(function($) {

    /* ------------------------- */
    $('#contact').on('click', function(event) {
      event.preventDefault();
  
      $('#contactblurb').html('Questions, suggestions, and general comments are all welcome!');
      $('.contact').addClass('is-visible');
  
      if ($('#name').val().length != 0) {
        $('.name').addClass('typing');
      }
      if ($('#email').val().length != 0) {
        $('.email').addClass('typing');
      }
      if ($('#message').val().length != 0) {
        $('.message').addClass('typing');
      }
    });
  

    $('.cd-popup').on('click', function(event) {
      if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });

    $(document).keyup(function(event) {
      if (event.which == '27') {
        $('.cd-popup').removeClass('is-visible');
      }
    });

    $('#name').keyup(function() {
      $('.name').addClass('typing');
      if ($(this).val().length == 0) {
        $('.name').removeClass('typing');
      }
    });
    $('#email').keyup(function() {
      $('.email').addClass('typing');
      if ($(this).val().length == 0) {
        $('.email').removeClass('typing');
      }
    });
    $('#message').keyup(function() {
      $('.message').addClass('typing');
      if ($(this).val().length == 0) {
        $('.message').removeClass('typing');
      }
    });
  
    $('#contactform').submit(function() {
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
      var human = $('#human:checked').val();
  
      if (human) {
        if (validateEmail(email)) {
          if (name) {
            if (message) {
              closeForm();
  
            } else {
              $('#notification-text').html("<strong>Please let us know what you're thinking!</strong>");
              $('.notification').addClass('is-visible');
            }
          } else {
            $('#notification-text').html('<strong>Please provide a name.</strong>');
            $('.notification').addClass('is-visible');
          }
        } else {
          $('#notification-text').html('<strong>Please use a valid email address.</strong>');
          $('.notification').addClass('is-visible');
        }
      } else {
        $('#notification-text').html('<h3><strong><em>Warning: Please prove you are a human and not a robot.</em></strong></h3>');
        $('.notification').addClass('is-visible');
      }
  
      return false;
    });
  });