$(document).ready(function(){
    $('#username').focus();
    $('.signup').validate({ 
        rules: {
            UserName:{
                required: true,
            },
            password:{
                required: true,
                rangelength:[8,16]
            },
        },
        messages: {
            UserName:{
                required: "<div class='hint'> Please enter your username! </div>",
            },
            password:{
                required: "<div class='hint'> Please enter your password! </div>",
                rangelength: "<div class='hint'> your password must be 8 and 16 characters! </div>",
            },
        },
    })
})