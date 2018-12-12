function search_book(){
    var queryString = $("form[name=search]").serialize() ;

    $.ajax({
        url:'../php/loadBookFromDB.php',
        type:'post',
        async: 'false',
        data: queryString,
        success:function(data){
            $('#abcde').text(data);
        }
    });
    return false;
}