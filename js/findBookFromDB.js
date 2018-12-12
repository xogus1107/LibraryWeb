function search_book(){
    var queryString = $("form[name=search]").serialize() ;

    $.ajax({
        url:'../php/loadBookFromDB.php',
        type:'post',
        async: 'false',
        data: queryString,
        success:function(data){
            $('#abcde').text(data);
            parse_result = JSON.parse(data);
            console.log(parse_result);

            for (var objVarJson in parse_result){
            	console.log(parse_result[objVarJson]['title']);
            }

           // $('#abcde').text(jsonobj);
            
        }
    });
    return false;
}