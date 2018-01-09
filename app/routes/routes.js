
const accountSid 		= process.env.accountSid;
const authToken			= process.env.authToken;
const myTwilioNumber 	= process.env.myTwilioNumber
const client 			= require('twilio')(accountSid, authToken);

module.exports = function(app, db) {

	app.post('/slack', (req, res) => {
   		// console.log("POst Body", req.body)

   		client.messages.create(
   		  {
   		    to: req.body.To,
   		    from: myTwilioNumber,
   		    body: req.body.Message,
   		  },
   		  (err, message) => {
   		  	if(err){ 
	   		    console.log(err);
	   		    res.status(err.status).send(err.message);
   		  	}
   		  	else{
	   		   	res.status(200).send("Message sent");
   		  	}
   		  }
   		);

   		// res.send('Hello')
  	});
};