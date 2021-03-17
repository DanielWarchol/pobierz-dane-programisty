console.log(`'AJAX - JQUERY - Warsztat - Pobierz-dane-programisty'`);

$(document).ready(function(){

    $('#get-data').click(function(){

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){
            $('#dane-programisty').after(
                '{ "imie":'+ '"' + data.imie + '"'  + ',' +  '"nazwisko":' + '"'  + data.nazwisko   + '"'  + ',' + '"zawod":' + '"' + data.zawod + '"'+ ',' + '"firma":' + '"'  + data.firma + '"}'
                
                );
        })
    })

});