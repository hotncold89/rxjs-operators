import { interval, range } from 'rxjs';
import { concatMap, concatMapTo } from 'rxjs/operators';

// interval(2000).pipe(
//   concatMap(n => range(1, n)))
//   .subscribe(data => console.log('final output:', data));

interval(2000).pipe(
  concatMapTo(range(1, 2))
).subscribe(data => console.log('final output:', data));