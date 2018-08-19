import { interval, range } from 'rxjs';
import { every, map, tap, take } from 'rxjs/operators';


// returns false after the first failed emitted value.
range(1, 9)
  .pipe(
    tap(data => console.log(data)),
    every(data => data % 2 === 0),
  )
  .subscribe(data => console.log(data));


// returns true after 'complete'.
range(1, 9)
  .pipe(
    map(data => data * 2),
    tap(data => console.log(data)),
    every(data => data % 2 === 0),
  )
  .subscribe(data => console.log(data));

// 'every' can't do it's work cuz the stream is not going to be completed (as an option, it can be fixed by adding 'take' operator).
interval(500)
  .pipe(
    map(data => data * 2),
    tap(data => console.log(data)),
    // take(10),
    every(data => data % 2 === 0),
  )
  .subscribe(data => console.log(data));