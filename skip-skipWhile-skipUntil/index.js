import { interval, timer } from 'rxjs';
import { skip, skipWhile, skipUntil } from 'rxjs/operators';

// It skips the first 5 values.
interval(300)
  .pipe(
    skip(5)
  )
  .subscribe(data => console.log(data));

// It skips values until they are less than 10.
interval(300)
  .pipe(
    skipWhile(data => data < 10)
  )
  .subscribe(data => console.log(data));

// It skips values for a 2000 ms.
interval(300)
  .pipe(
    skipUntil(timer(2000))
  )
  .subscribe(data => console.log(data));