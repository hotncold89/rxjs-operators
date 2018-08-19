import { interval } from 'rxjs';
import { concat, tap, take } from 'rxjs/operators';

// Concat the second stream after the first one is complete.
// In case the first stream is endless, the second one will never be concatenated.
interval(300)
  .pipe(
    take(10),
    tap(firstStream => console.log('firstStream')),
    concat(interval(300)
      .pipe(
        tap(secondStream => console.log('secondStream')),
      ))
  )
  .subscribe(data => console.log(data));