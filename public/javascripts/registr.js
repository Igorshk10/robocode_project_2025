$(document).ready(function () {

    let form = document.getElementsByClassName('form')[0];
    
    form.addEventListener('submit', function (e) {
        let email = $("#email").val();
        let password = $("#password").val();
        let username = $("#username").val();
        let confirmPassword = $("#confirmPassword").val();
        let budget = $("#budget").val();
        let p_length = password.length
        let p2_length = confirmPassword.length

       /* if (email == '' || password == '' || username == '' || budget == '' || confirmPassword == '') {
            status = false;
            alertify.set('notifier','position', 'bottom-left');
            alertify.error('minimum password length: 4');
        } */

        if(p_length < 4 || p2_length < 4){
          e.preventDefault();
            alertify.set('notifier','position', 'bottom-left');
            alertify.error('minimum password length: 4');

        } 

      

        if (password !== confirmPassword) {
            e.preventDefault();
            alertify.set('notifier','position', 'bottom-left');
            alertify.error('The password is incorect');

        }

       
    });




    /*$('#submit').click(function (e) { 

        let form = document.getElementById('form');
        let email = $("#email").val();
        let password = $("#password").val();
        let username = $("#username").val();
        let confirmPassword = $("#confirmPassword").val();
        let budget = $("#budget").val();
        let p_length = password.length
        let p2_length = confirmPassword.length

        if(p_length < 4 || p2_length < 4){
            alertify.set('notifier','position', 'bottom-left');
            alertify.error('minimum password length: 4');
            return;
        } 
            
        if (password !== confirmPassword) {
                alertify.set('notifier','position', 'bottom-left');
                alertify.error('The password is incorect');
                return;
            }
            
            if (email && password && username && budget) {
            console.log('Форма успішно відправлена!');
                $('.form').submit()
            // Тепер можна зробити запит на сервер або обробити форму
        } else {
            alert('Будь ласка, заповніть всі поля!');
        }
        
    }); */

    






});