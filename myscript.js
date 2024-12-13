$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) { 
            //change yes to no
            $('h1').html('No');
        } else {
            //set h1 text to yes
            $('h1').html('Yes');
        }
    });
});