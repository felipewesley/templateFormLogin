const minLengthPassword = 4

$('.input-value').focus(e => {
    $(e.target).toggleClass('init-focus')
}).blur(e => {
    $(e.target).toggleClass('init-focus')
})

$(document).ready(() => {
    $('#input-login').on('focus')
})

$('#input-login').keyup(e => {
    
    let val = String(e.target.value)
    
    if (val.indexOf('@') != -1 && val.indexOf('.com') != -1 && val.indexOf('@') < val.indexOf('.com')){
        $(e.target).removeClass('init-focus, error').addClass('success')
    } else {
        $(e.target).removeClass('success').addClass('init-focus')
    }
}).blur(e => {
    
    if(String(e.target.value).length == 0){
        $(e.target).removeClass('error, success')
    } else{
        if(!$(e.target).hasClass('success')){
            console.log('ta errado')
            $(e.target).addClass('error')
        }
    }
})

$('#input-password').keyup(e => {
    
    let val = String(e.target.value)

    if(val.length >= minLengthPassword){
        $(e.target).removeClass('init-focus, error').addClass('success')
    } else {
        $(e.target).removeClass('success').addClass('init-focus')
    }
}).blur(e => {
    let val = String(e.target.value)

    if(val.length < minLengthPassword && val.length != 0){
        $(e.target).addClass('error')
    }
})