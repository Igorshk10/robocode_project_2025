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