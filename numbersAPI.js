// Jquery ===>
$(document).ready(function(){
    var generate = $('#generate');
    $('#number').on('click', function(){
        console.log($('#number').val());
    });
    // generate button
    generate.on('click', function(){
        // variable for button
        var url = "http://numbersapi.com/";
        var data = $('#number').val();
        // value combined
        url += data;

        //response using get method
        $.get(url, function(response) {
            $('#fact').html(response);
            console.log(response);
        });
    });
});
