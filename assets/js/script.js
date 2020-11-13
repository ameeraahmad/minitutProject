$(document).ready(function () {
    $(".mobile").on('click', function () {
        $('.menu').toggleClass('left-0');
        $(this).find('i').toggleClass('fa-bars')
        $(this).find('i').toggleClass('fa-close')
    });
    
    $(".toggleImageBtn").on('click', function (e) {
        e.preventDefault()
        var src = $(this).attr('data-src')
        $('.toogleImage').attr('src', src)
    })
})


//$(".toggleImage").on('click', function (e) {
//        e.preventDefault()
//        var src = $(this).attr('data-src')
//        $('.toogleImages').attr('src', src)
//    })
//})



$('#cir1').on('click', function () {
    
    var X = document.getElementById('#jwl');
    
    X.innerHTML = 'Jewelry Series';
    $('#_p').css('display', 'none')
    
})

























