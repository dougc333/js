import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

const obs$ = Observable.create((s)=>{
  console.log("in obs");
  const interval = setInterval(()=>{
     console.log("setInteral");
     s.next('tick');
  },1000);
  //setTimeout(()=>clearInterval(interval,7*1000));
});

const subscription = obs$.pipe(
  map((val,index)=>index % 2===0 ? val:'tock')
).subscribe(val=>console.log(val));

setTimeout(()=>subscription.unsubscribe(),10*1000);


