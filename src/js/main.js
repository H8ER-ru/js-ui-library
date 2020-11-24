import './lib/lib'

$('.el').addAttr('data-id')
$('.active').click(sayHi)
function sayHi(){
    console.log('hi')
}
$('button').on('click', function (){
    $('.more').fadeOut(1800)
})
$('div').click(function (){
    console.log($(this).index())
})

console.log($('.cool').find('.some'))

console.log($('.more').eq(0).siblings())


