// Scroll to top
$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });    
});

// Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
    // Get the form.
    var form = $('#ajax-contact');
    // Get the messages div.
    var formMessages = $('#form-messages');
    // TODO: The rest of the code will go here...
});
