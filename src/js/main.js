import './lib/lib'
import $ from "./lib/core";

$('#first').on('click', () =>{
    $('.container div').eq(0).fadeToggle(800)
})
$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal Title',
            body: 'Aliquam aut delectus eius error facere hic impedit in, inventore iust molestiae mollitia',
        },
        btns : {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert(' data saved')
                    }
                ]
            ]
        }
    })
})