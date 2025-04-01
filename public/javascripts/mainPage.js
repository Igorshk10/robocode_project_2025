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


    $.get("/main/api/transaction", function (data, textStatus, jqXHR) {
            console.log(data.transaction);
            let transactions = data.transaction;
            const ctx = document.getElementById('myChart');

            new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: transactions.map(transaction => transaction.category),
                datasets: [{
                label: 'UAH',
                data: transactions.map(transaction => transaction.total_amount),
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

        },
    );


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