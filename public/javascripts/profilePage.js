$(document).ready(function () {
    $('#change_monthlyBudget').click(function (e) { 
       $('.window_monthlyBudget').addClass('visible');
       $('.body').css('overflow', 'hidden');
    });

    $('#stop_monthlyBudget').click(function (e) { 
        $('.window_monthlyBudget').removeClass('visible'); 
        $('.body').css('overflow', 'visible');
    });

    $('#change_username').click(function (e) { 
        $('.window_username').addClass('visible');
        $('.body').css('overflow', 'hidden');
    });

    $('#stop_username').click(function (e) { 
        $('.window_username').removeClass('visible'); 
        $('.body').css('overflow', 'visible');
    });

    $('.burger_btn').click(function (e) { 
        $('.burger_window').addClass('visible');
        $('.body').css('overflow', 'hidden');
    });

    $('#close_burger_menu').click(function (e) { 
        $('.burger_window').removeClass('visible'); 
        $('.body').css('overflow', 'visible');
    });

});