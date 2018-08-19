import { interval } from 'rxjs';
import { last, take } from 'rxjs/operators';

// Returns the last value of the completed stream.
interval(300)
  .pipe(
    take(10),
    last()
  )
  .subscribe(data => console.log(data));

// Returns the latest value which is correct(8).
interval(300)
  .pipe(
    take(10),
    last(data => data % 2 === 0) //8
  )
  .subscribe(data => console.log(data));
