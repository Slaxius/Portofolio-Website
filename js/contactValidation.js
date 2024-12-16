$(document).ready(function(){
    $('#name').on('input', function(){
        $('#name').removeClass('error-input');
        $('#nameError').text('');
    });

    $('#phone').on('input', function(){
        $('#phone').removeClass('error-input');
        $('#phoneError').text('');
    });

    $('#email').on('input', function(){
        $('#email').removeClass('error-input');
        $('#emailError').text('');
    });

    $('#subject').on('input', function(){
        $('#subject').removeClass('error-input');
        $('#subjectError').text('');
    });

    $('#message').on('input', function(){
        $('#message').removeClass('error-input');
        $('#messageError').text('');
    });

    $('#contact-form-container').on('submit', function(event){
        event.preventDefault();
        
        let isValid = true;
        
        const name = $('#name').val();
        if(!name.length){
            $('#nameError').text('Name must be filled.');
            $('#name').addClass('error-input');
            isValid = false;
        }
        else if(name.length < 5){
            $('#nameError').text('Name must be at least 5 characters.');
            $('#name').addClass('error-input');
            isValid = false;
        }
        else{
            $('#name').removeClass('error-input');
            $('#nameError').text('');
        }
        
        const phone = $('#phone').val();
        let phoneRegex = /^[0-9+\-\s()]+$/;
        if(!phone.length){
            $('#phoneError').text('Phone number must be filled.');
            $('#phone').addClass('error-input');
            isValid = false;
        }
        else if(phone.length < 7 || phone.length > 15){
            $('#phoneError').text('Phone number must be between 7 and 15 digits.');
            $('#phone').addClass('error-input');
            isValid = false;
        }
        else if(!phoneRegex.test(phone)){
            $('#phoneError').text('Phone number can only contain numbers, +, -, (), or space.');
            $('#phone').addClass('error-input');
            isValid = false;
        }
        else{
            $('#phone').removeClass('error-input');
            $('#phoneError').text('');
        }

        const email = $('#email').val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email.length){
            $('#emailError').text('Email must be filled.');
            $('#email').addClass('error-input');
            isValid = false;
        }
        else if(!emailRegex.test(email)){
            $('#emailError').text('Invalid email format. Example: user@example.com');
            $('#email').addClass('error-input');
            isValid = false;
        }
        else{
            $('#email').removeClass('error-input');
            $('#emailError').text('');
        }

        const subject = $('#subject').val();
        if(!subject.length){
            $('#subjectError').text('Email subject must be filled.');
            $('#subject').addClass('error-input');
            isValid = false;
        }
        else{
            $('#subject').removeClass('error-input');
            $('#subjectError').text('');
        }

        const message = $('#message').val();
        if(!message.length){
            $('#messageError').text('Message must be filled.');
            $('#message').addClass('error-input');
            isValid = false;
        }
        else{
            $('#message').removeClass('error-input');
            $('#messageError').text('');
        }

        if(isValid){
            showPopup("Your message has been sent successfully!");
            sendEmail();
            resetForm();
        } 
        else{
            showPopup("Please fill in all the fields correctly.");
        }
    });

    function showPopup(message){
        $(".popup-content p").text(message);
        $(".popup-content").css("display", "flex");
    }
    
    $("#close-popup").on("click", function(){
        $(".popup-content").css("display", "none");
    });

    function resetForm(){
        $("#name, #phone, #email, #subject, #message").val("").css("border", "");
    }
});
