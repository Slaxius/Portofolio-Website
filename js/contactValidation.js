$(document).ready(function(){
    function validateForm(){
        let isValid = true;
        
        $("#name, #phone, #email, #title, #message").each(function(){
            const input = $(this);
            if($.trim(input.val()) === ""){
                isValid = false;
                input.css("border", "2px solid red");
            } 
            else{
                input.css("border", "");
            }
        });

        const email = $("#email").val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            $("#email").css("border", "2px solid red");
        }

        return isValid;
    }

    $("#name, #phone, #email, #title, #message").on("keyup change", function(){
        const input = $(this);
        if($.trim(input.val()) !== ""){
            input.css("border", "");
        }

        if(input.attr("id") === "email"){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(input.val())) {
                input.css("border", "");
            }
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

    $("button[type='submit']").on("click", function(event){
        event.preventDefault();
        if (validateForm()) {
            showPopup("Your message has been sent successfully!");
            sendEmail();
            resetForm();
        } else {
            showPopup("Please fill in all the fields correctly.");
        }
    });
});
