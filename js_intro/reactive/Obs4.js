// node -r esm Obs4.js
// add error recovery, runtime continues after error



import {Observable, of} from 'rxjs'
import {map,catchError} from 'rxjs/operators'

const obs$ = Observable.create( (s)=>{
  console.log("in obs");
  const interval = setInterval(()=>{
     console.log("setInteral");
     s.next('tick');
  },1000);
  
  setTimeout(()=> s.error(new Error("ERROR!!!! @5 sec")),5*1000);
  
  setTimeout(()=> clearInterval(interval),7*1000);
});

const subscription = obs$.pipe(
  map((val,index)=>index % 2 ===0 ? val:'tock'),
  catchError(error=>of('Explosion!!!'))
).subscribe(val=>console.log(val));

setTimeout(()=>subscription.unsubscribe(),10*1000);
setTimeout(()=>console.log('12 second '),12*1000);

