$(document).ready(function(){    
    $('.question-info').click(function(){
        $(this).children('.info').slideToggle()
        $(this).find('.open').toggleClass('opened')
    })

    $('.dot1').click(function(){
        $('.page1').show(350);
        $('.page2').hide(350);
        $('.page3').hide(350);
    });

    $('.dot2').click(function(){
        $('.page2').show(350);
        $('.page1').hide(350);
        $('.page3').hide(350);
    });

    $('.dot3').click(function(){
        $('.page3').show(350);
        $('.page1').hide(350);
        $('.page2').hide(350);
    });

    $('.posters').click(function(){
        console.log('click')
        $('.box').removeClass('hide')
        $('.box').addClass('show')
        $('#bigimg').attr('src', $(this).attr('src'))
    })

    
    $('.smallimg').mouseover(function(){
        $(this).css('opacity', '1')
    })
    $('.smallimg').mouseleave(function(){
        $(this).css('opacity', '0.8')
    })
    $('.smallimg').click(function(){
        if($('#bigimg').attr('src') != $(this).attr('src')){
            $(this).animate({
                opacity: "0.3"
            },300)
            $(this).animate({
                opacity: "1"
            },300)
           
            $('#bigimg').animate({
                width: "0",
                hight: "0",
                opacity: "0"
            },300).attr('src', $(this).attr('src'))
            $('#bigimg').animate({
                width: "300px",
                hight: "450px",
                opacity: "1"
            },300)
        }
       
    })
})