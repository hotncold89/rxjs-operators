import { interval } from 'rxjs';
import { timeout, delay } from 'rxjs/operators';

// 'timeout' operator throws an error if no value is emitted before specified duration

console.log('The stream is started');

interval(0)
  .pipe(
    delay(4000),
    timeout(3000),
  )
  .subscribe(data => console.log(data));