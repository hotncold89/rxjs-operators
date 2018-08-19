import { of, interval } from 'rxjs';
import { delay, delayWhen } from 'rxjs/operators';

const foo = of(1, 2, 3, 4, 5);

// It will dispatch all the values after 1000 ms
foo
  .pipe(
    delay(1000),
  )
  .subscribe(data => console.log(data));

// It will dispatch values one by one with 1000 ms delay
foo
  .pipe(
    delayWhen(data => interval(data * 1000)),
  )
  .subscribe(data => console.log(data));