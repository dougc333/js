//https://www.twilio.com/blog/confirming-sms-message-delivery-with-rxjs-observables-node-js-and-twilio-programmable-sms


import twilio from 'twilio'
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

console.log(client);


client.messages.create({
  body:"asdfasdfasdfsa",
  to: '+16503873796',
  from: '+16507619455'
 }
).then(
  result=>{
  console.log(result);
  return result.sid
})
.then(sid=>client.messages(sid).fetch())
.then(console.log);

