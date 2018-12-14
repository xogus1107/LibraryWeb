function load_All_User(){
	$.ajax({
		url:'../php/loadAllUserInfo.php',
		type:'post',
		async:'false',
		success:function(data){

			parse_result = JSON.parse(data);
			console.log(parse_result);

			for (var objJson in parse_result){
				if (objJson == '6')
					break;

				  var text = getTarget(objJson);
               console.log(text);
               if (text == 'null')
                return;
               else{
                $(text+'_user_name').text(parse_result[objJson]['name']);
                $(text+'_user_birthday').text(parse_result[objJson]['birthday']);
                $(text+'_user_address').text(parse_result[objJson]['address']);
                $(text+'_user_phonenumber').text(parse_result[objJson]['phone_number']);
               }


			}




		}


	})

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

