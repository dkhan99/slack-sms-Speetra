module.exports = function(app, db) {

	const accountSid 		= process.env.accountSid;
	const authToken			= process.env.authToken;
	const myTwilioNumber 	= process.env.myTwilioNumber;
	const slackHook 		= process.env.slackHook;
	const client 			= require('twilio')(accountSid, authToken);
	const MessagingResponse = require('twilio').twiml.MessagingResponse;
	const request 			= require('request');

	app.post('/slack', (req, res) => {
   		// console.log("/slack Post Body", req.body)
   		let data = req.body.text.split(" ")
   		let to = data.shift()
   		let text = data.join(" ")
   		client.messages.create(
   		  {
   		    to: to,
   		    from: myTwilioNumber,
   		    body: text,
   		  },
   		  (err, message) => {
   		  	if(err){ 
	   		    console.log(err);
	   		    res.send("Error: Please enter a valid number first \n" + err.message);
   		  	}
   		  	else{
	   		   	res.status(200).send("Sent "+ text + " to " + to);
   		  	}
   		  }
   		);
  	});

	app.post('/sms', (req, res) => {
   		// console.log("/sms Post Body", req.body)
   		let message = "Text from " + req.body.From + ": \n" + req.body.Body
   		console.log("req.body.body", message)
   		request.post({url: slackHook, json: {text:message}}, function optionalCallback(err, httpResponse, body) {
   		  if (err) {
   		    return console.error('upload failed:', err);
   		  }
   		  console.log('Upload successful!  Server responded with:', body);
   		});

   		const twiml = new MessagingResponse();
   		twiml.message('Message sent to slack');

   		res.writeHead(200, {'Content-Type': 'text/xml'});
   		res.end(twiml.toString());

   		// res.status(200)
  	});
};