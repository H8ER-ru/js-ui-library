import './lib/lib'

$('.el').addAttr('data-id')
$('.active').click(sayHi)
function sayHi(){
    console.log('hi')
}