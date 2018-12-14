function delete_book_from_DB(input){
	console.log(input);

	var queryString;

	switch(input){
		case 'first':
		queryString = $("form[name=first_book_area]").serialize();
	}

	var a = document.getElementById(input+"_book_title").innerHTML;

	console.log(a);

	$.ajax({
		url:'../php/deleteBookFromDB.php',
		type:'post',
		async: 'false',
		data: {"input":a},
		success:function(data){
			console.log(data);
			
			var text = "#"+input;
			$(text+'_book_title').text("");
            $(text+'_book_writer').text("");
            $(text+'_book_publisher').text("");
            $(text+'_book_total').text("");
            $(text+'_book_rented').text(""); 
            
		}


	})


}