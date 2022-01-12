$(document).ready(function(){

	$("#encrypt").submit(function(event){
		
		var message = $("#message").val();
		var secret = $("#secret").val();
		
		event.preventDefault();
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
		"jsonrpc": "2.0",
		"id": 0,
		"method": "query",
		"params": {
			"url": secret,
			"count": 1
		}
		});

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
		};

		fetch("https://testnet.accumulatenetwork.io/v2", requestOptions)
		.then(response => response.text())
		.then(function(result1){
			const obj = JSON.parse(result1)
			console.log(obj.result.data)
			var type = obj.result.data.type;
			var url = obj.result.data.url;
			var keybook = obj.result.data.keyBook;
			var tokenUrl = obj.result.data.tokenUrl;
			var balance = obj.result.data.balance;
			var txCount = obj.result.data.txCount;
			var noOnce = obj.result.data.nonce;
			var creadiBalance = obj.result.data.creditBalance;
			keybook=keybook.toString().substring(0,3)
			console.log("Type:- "+type +"\n Url:- " +url+"\n KeyBook:- "+keybook +"\n TokenUrl:- "+tokenUrl+"\n Balance:- "+balance+"\n TxCount:- "+txCount+"\n NoOnce:- " +noOnce +"\n CreditBalance:- "+creadiBalance) 
			var totalMessage = 	"Type:- "+type +"\n Url:- " +url+"\n KeyBook:- "+keybook +"\n TokenUrl:- "+tokenUrl+"\n Balance:- "+balance+"\n TxCount:- "+txCount+"\n NoOnce:- " +noOnce +"\n CreditBalance:- "+creadiBalance
			$("#ciphertext").val(totalMessage);
		})
		.catch(error => console.log('error', error));
	});

	

});
