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
                label: 'USD',
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

/*
    $(function() {
        let selectValue
        let $select = $('.select-list');
        getVal();

    if ($select.length > 0) {
            getVal();
            $('.select-text').text(selectValue);
    
            // Додаємо обробник події
            $select.on('change', function() {
                getVal();
                $('.selected-text').text(selectValue);
                $(this).blur();
            });
        } else {
            console.log('Елемент select-list не знайдений!');
        }
        
        function getVal() {
            selectValue = $('.select').find('option:selected').text()
        }
    }); 

*/

const selectDiv = document.querySelector('.select_div')
const selectOption = document.querySelector('.select_option')
const selectVal = document.querySelector('#select_val')
const optionsList = document.querySelectorAll('.options li')

$(selectOption).click(function (e) { 
    selectDiv.classList.toggle('active')
    
});

optionsList.forEach(function (optionsListSingle) {
    $(optionsListSingle).click(function (e) { 
        text = this.textContent
        selectVal.value = text
        selectDiv.classList.remove('active')
        
    });
})

});