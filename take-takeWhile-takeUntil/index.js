import { interval, timer } from 'rxjs';
import { take, takeWhile, takeUntil } from 'rxjs/operators';

// It emits first 5 values.
interval(300)
  .pipe(
    take(5)
  )
  .subscribe(data => console.log(data));

// It emits values until they are less than 10.
interval(300)
  .pipe(
    takeWhile(data => data < 10)
  )
  .subscribe(data => console.log(data));

// It emits values during 2000 ms.
interval(300)
  .pipe(
    takeUntil(timer(2000))
  )
  .subscribe(data => console.log(data));