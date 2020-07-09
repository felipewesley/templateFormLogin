$(document).ready(() => {
    
    $('#input-login').focus()

    $('#btn-entrar').mousedown(e => {
        $(e.target).css('background', '#3821ff')
    }).mouseup(e => {
        $(e.target).css('background', '#1300b9')
    })

    $('.input-value').keyup(e => {
        if(String(e.target.value).indexOf(" ") != -1){
            $(e.target).removeClass('primary').addClass('error')
        } else {
            $(e.target).removeClass('error').addClass('primary')
        }
    })
})