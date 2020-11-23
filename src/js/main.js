import './lib/lib'

$('.el').addAttr('data-id')
$('.active').click(sayHi)
function sayHi(){
    console.log('hi')
}
$('button').on('click', function (){
    $('div').eq(2).toggleClass('active')

})
$('div').click(function (){
    console.log($(this).index())
})

