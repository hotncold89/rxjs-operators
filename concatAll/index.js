import { interval, of } from 'rxjs';
import { concatAll, take, tap } from 'rxjs/operators';

/*
Subscribes to each inner observable and emit values, when complete subscribe to next
obs1: 0,1,2,3,4,...10 (complete)
obs2: 0,1,2,3,4 (complete)
obs3: 0,...10 (complete)
*/

of(
  interval(100).pipe(take(10), tap(data => console.log('first stream: ', data))),
  interval(1000).pipe(take(4), tap(data => console.log('second stream: ', data))),
  interval(100).pipe(take(10), tap(data => console.log('third stream: ', data))),
)
  .pipe(concatAll())
  .subscribe(data => console.log(data));
