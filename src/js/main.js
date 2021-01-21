import './lib/lib'
import $ from "./lib/core";

$('#first').on('click', () =>{
    $('.container div').eq(0).fadeToggle(800)
})
