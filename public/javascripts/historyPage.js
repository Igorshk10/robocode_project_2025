$(document).ready(function () {
    const transactionsJs = JSON.stringify(transactions) ;
    console.log(transactionsJs);
    $('.burger_btn').click(function (e) { 
        $('.burger_window').addClass('visible');
        $('.body').css('overflow', 'hidden');
    });

    $('#close_burger_menu').click(function (e) { 
        $('.burger_window').removeClass('visible'); 
        $('.body').css('overflow', 'visible');
    });

    $('#add_transaction').click(function (e) { 
        $('.transaction_window').addClass('visible');
        $('.body').css('overflow', 'hidden');
    });

    $('#close_transaction_form').click(function (e) { 
        $('.transaction_window').removeClass('visible'); 
        $('.body').css('overflow', 'visible');
    });

    $(function() {
        var selectValue,
            $cSelect = $('.select-list');
        
        getVal();
        $('.select-text').text(selectValue);
        
        $cSelect.on('change', function() {
            getVal()
            $('.selected-text').text(selectValue);
            $(this).blur();
        });
        
        function getVal() {
            selectValue = $('.select').find('option:selected').text()
        }
    });

});