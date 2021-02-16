import {sendSMS} from './rxjs-twilio'
import {of,merge} from 'rxjs'
import {map,catchError,tap} from 'rxjs/operators'

const phoneNumbers = [
  '+16503873796'
]

const requests=[]

phoneNumbers.forEach(number=>{
  requests.push(
    sendSMS(number,'hello world!').pipe(
      map(response=>{
        return {number:number, status:response.status}
      }),
      catchError(error=>of({number:number,status:'error',details:error})),
      map(response=>{
        response.time = new Date();
        return response;
      })
     )
  );
});

merge(...requests).pipe(
  tap(()=>console.log('------------------'))
).subscribe(console.log)

