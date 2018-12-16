function search_book(){
    var queryString = $("form[name=search]").serialize() ;
    $.ajax({
        url:'../php/loadBookFromDB.php',
        type:'post',
        async: 'false',
        data: queryString,
        success:function(data){
            //$('#abcde').text(data);
            //console.log(data);
            parse_result = JSON.parse(data);
            //console.log(parse_result);

            var range = ['0', '1', '2', '3', '4', '5'];
            for (i in range){
                var text = getTarget(i);
                console.log("var i :"+text);
                $(text+'_book_title').text('');
                $(text+'_book_writer').text('');
                $(text+'_book_publisher').text('');
                $(text+'_book_total').text('');
                $(text+'_book_rented').text('');
            }

            for (var objJson in parse_result){
                if(objJson == '6')
                    break;

               var text = getTarget(objJson);
               //console.log(text);
               if (text == 'null')
                return;
               else{
                $(text+'_book_title').text(parse_result[objJson]['title']);
                $(text+'_book_writer').text(parse_result[objJson]['writer']);
                $(text+'_book_publisher').text(parse_result[objJson]['publisher']);
                $(text+'_book_total').text(parse_result[objJson]['book_count']);
                $(text+'_book_rented').text(parse_result[objJson]['rented_book_count']);
               }

            }

        }
    });
    return false;
}


function getTarget(num){
    console.log(num);
    var text;
    switch (num){
        case '0': text = "#first";
        break;

        case '1': text = '#second';
        break;

        case '2': text = '#third';
        break;

        case '3': text = '#fourth';
        break;

        case '4': text = '#fifth';
        break;

        case '5': text = '#sixth';
        break;

        default: text = 'null';
        break;
    }

    console.log("abcde : "+text);

    return text;
}

function clearTexts(){
    for (var i = 0; i < 6; i ++){
        var text = getTarget(i);
        $(text+'_book_title').text("");
        $(text+'_book_writer').text("");
        $(text+'_book_publisher').text("");
        $(text+'_book_total').text("");
        $(text+'_book_rented').text("");
    }

}
