import { interval } from 'rxjs';
import { reduce, scan, take } from 'rxjs/operators';

// 'reduce' operator is very similar to Array.prototype.reduce. It does it's job only when the stream is completed
// interval(500)
//   .pipe(
//     take(5),
//     reduce((acc, value) => acc + value, 0),
//   ).subscribe(data => console.log(data));

// 'scan' operator is very similar to Array.prototype.reduce. It does it's job on every 'next' iteration.
interval(500)
  .pipe(
    scan((acc, value) => acc + value, 0),
  ).subscribe(data => console.log(data));
