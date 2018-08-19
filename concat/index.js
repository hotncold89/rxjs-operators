import { interval } from 'rxjs';
import { concat, tap, take } from 'rxjs/operators';

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