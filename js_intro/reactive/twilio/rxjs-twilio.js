//
//https://www.twilio.com/blog/confirming-sms-message-delivery-with-rxjs-observables-node-js-and-twilio-programmable-sms


import {Subject,timer} from 'rxjs'
import {distinct} from 'rxjs/operators'
import twilio from 'twilio'


const client = twilio(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN);

export function sendSMS(phoneNumber, body){
  const subject = new Subject();

  client.messages.create({
    body:body,
    from:process.env.TWILIO_PHONE_NUMBER,
    to:phoneNumber,
  })
  
  .then(msg=>{
    subject.next(msg);
    pollStatus(msg.sid,subject,20);
  }).catch(error=>{
    subject.error(error);
  });
  return subject.pipe(distinct(response=>response.status));
}

const messageDeliveryStatuses = [`delivered`,`undelivered`,`failed`]
let stopPolling = [];
function pollStatus(sid,subject,timeout=20,watchdog=null){
   if (!watchdog) {
     watchdog = timer(timeout*1000).subscribe(()=>stopPolling[sid]=true);
   }
   client.messages(sid).fetch().then(response=>{
     subject.next(response);
     if(messageDeliveryStatuses.includes(response.status) || stopPolling[sid]){
       subject.complete();
       watchdog.unsubscribe();
       stopPolling.splice(sid);
     }else{
       pollStatus(sid,subject,null,watchdog);
     }

   });

}

