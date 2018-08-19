import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

const ticker = interval(1000);

//emits the first 'next' and makes 'complete'
ticker.pipe(
  first(),
).subscribe(data => console.log(data));

//emits the first 'next' which is correct and makes 'complete'
ticker.pipe(
  first(data => data === 4),
).subscribe(data => console.log(data));