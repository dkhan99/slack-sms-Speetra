# slack-sms-Speetra


A bidirectional communication pipe between slack and SMS/text messaging using the Slack API and Twilio API

## Requirements

1. Node.js 
2. Admin access to a Slack Workspace
3. Twilio API account


## Usage

Allows users to send a sms message from Slack to a valid phone number and recieve a response from the number back on slack!


## Installation

1. Download the repository
2. Run terminal command: `npm install`
3. Create a file called ".env" simmilar to the existing ".env.example" file in the root of the project
4. Create a [Twilio API project](https://www.twilio.com/console/projects/summary)
5. Create a [Slack App](https://api.slack.com/apps)
6. Add your credentials to the ".env" file created in step 3 (_Can't find your credentials? Check Below!_)
7. To test: run terminal command: `npm run dev`
8. *Optional: Use a service like [ngrok](https://dashboard.ngrok.com/get-started#) to test with your local server before deploying.*




## Slack Setup

1. Click create new APP at [Slack App](https://api.slack.com/apps)
2. Name your app and select which workspace to add it to.
3. Under Add features and functionality, select **Slash Commands** 
4. Create a new command
5. The command could be something like /sms
6. The Request URL needs to be the domain name of your deployed app (or the ngrok url if you are using it) with /slack at the end. Example: https://me.com/slack
7. In the description and hint you should note the phone number must come first followed by the message to be sent.
8. Click Save
9. Under the Features column to the left click **Incoming WebHooks**
10. Activate the web hooks by sliding on
11. Click **Add New Webhook** at the bottom
12. Select and authorize the channel you would like to receive incoming messages to
13. Copy the newly generated Webhook URL to the **.env** file of your project
14. If you are notified by slack to re-install the app, re-install it

## Twilio Setup

1. Create a new [Twilio API project](https://www.twilio.com/console/projects/summary) with Programable SMS
2. Copy and set the ACCOUNT SID and AUTH TOKEN in the **.env** file of your project
3. If don't have a Twilio number, [purchase one here](https://www.twilio.com/console/phone-numbers/search) 
4. Copy your Twilio Number from [Manage Numbers](https://www.twilio.com/console/phone-numbers/incoming) to the **.env** file of your project.
5. Click on your phone number at [Manage Numbers](https://www.twilio.com/console/phone-numbers/incoming)
6. Under Messaging set the *A message comes in Webhook* to the domain name of your deployed app (or the ngrok url if you are using it) with /sms at the end. Example: https://me.com/sms
7. Click Save
8. Create a [TwiML app here](https://www.twilio.com/console/sms/runtime/twiml-apps)
9. You can name it something like toSlack
10. The URL needs to be the domain name of your deployed app (or the ngrok url if you are using it) with /sms at the end. Example: https://me.com/sms
11. Click the plus sign to add it (+)
12. Restart your server if you need to


## Have fun

### Go to the slack workstation you installed your app and test out you new command!

*If you used **/sms** as your slash command your message should look like:*
**/sms +1234567890 This text is from Slack**

## All done!