/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {
    
    // Label effect
    $('.input1').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    $('.input1').blur(function () {
        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    

    // Reload page
    $('a.profile').on('click', function () {
        location.reload(true);
    });


});
