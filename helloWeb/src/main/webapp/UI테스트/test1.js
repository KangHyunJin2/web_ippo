//test1.js
const json = `
[{"id":1,"first_name":"Tiff","last_name":"Revely","email":"trevely0@twitter.com","gender":"Female","salary":4129},
{"id":2,"first_name":"Janene","last_name":"Barnet","email":"jbarnet1@elegantthemes.com","gender":"Female","salary":5862},
{"id":3,"first_name":"Cordy","last_name":"Betke","email":"cbetke2@hatena.ne.jp","gender":"Male","salary":4772},
{"id":4,"first_name":"Schuyler","last_name":"McTrusty","email":"smctrusty3@ca.gov","gender":"Male","salary":5890},
{"id":5,"first_name":"Murdock","last_name":"Trunks","email":"mtrunks4@last.fm","gender":"Male","salary":6469},
{"id":6,"first_name":"Jae","last_name":"Hurworth","email":"jhurworth5@devhub.com","gender":"Male","salary":6101},
{"id":7,"first_name":"Hadlee","last_name":"Hiddersley","email":"hhiddersley6@squarespace.com","gender":"Male","salary":5855},
{"id":8,"first_name":"Franky","last_name":"Rey","email":"frey7@naver.com","gender":"Female","salary":4247},
{"id":9,"first_name":"Haley","last_name":"Marval","email":"hmarval8@psu.edu","gender":"Female","salary":6654},
{"id":10,"first_name":"Dionne","last_name":"Riggeard","email":"driggeard9@google.ru","gender":"Female","salary":3305},
{"id":11,"first_name":"Jarid","last_name":"Watson","email":"jwatsona@cisco.com","gender":"Male","salary":6100},
{"id":12,"first_name":"Friedrick","last_name":"Prigg","email":"fpriggb@techcrunch.com","gender":"Male","salary":6339},
{"id":13,"first_name":"Nefen","last_name":"Ruggiero","email":"nruggieroc@ow.ly","gender":"Male","salary":3958},
{"id":14,"first_name":"Hailey","last_name":"Parkman","email":"hparkmand@1und1.de","gender":"Male","salary":5991},
{"id":15,"first_name":"Violet","last_name":"Espley","email":"vespleye@ibm.com","gender":"Female","salary":4618}]
`;
let members = JSON.parse(json);

let targetAry = [];
members.forEach((acc) =>{
	if(acc.gender== "Female" && acc.salary > 4500){
		targetAry.push(acc);
	}
})
targetAry.forEach((item) =>{
	console.log(item)
})
