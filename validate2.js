$(document).ready(function(){
    $('#username').focus();
   
    $('.signup').validate({ 
        rules: {
            UserName:{
                required: true,
            },
            email:{
                required: true,
                email: true,
            },
            password:{
                required: true,
                rangelength:[8,16]
            },
            confirm_password:{
                equalTo: '#password'
            },
            PhoneNumber:{
                required: true,
                number: true,
            }
        },
        messages: {
            UserName:{
                required: "<div class='hint'> Please enter your username! </div>",
            },
            email: {
                required: "<div class='hint'> Please supply an email address </div>",
                email: "<div class='hint'> this is not an email address </div>",
            },
            password:{
                required: "<div class='hint'> Please enter your password! </div>",
                rangelength: "<div class='hint'> your password must be 8 and 16 characters! </div>",
            },
            confirm_password:{
                equalTo: "<div class='hint'>  The two passwords don't match.! </div>",
            },
            PhoneNumber:{
                required: "<div class='hint'> you must enter your phone number.! </div>",
                number: "<div class='hint'> your phone number must consists of numbers only! </div>",
            }
        },
    })
})