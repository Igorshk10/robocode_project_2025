$(document).ready(function () {
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


    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels:  ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: 'UAH',
        data: [700, 129, 356, 522, 1200, 343],
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
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