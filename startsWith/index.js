import { timer } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

console.info('Quick start! And wait...');
const tickerWithDelay = timer(5000, 1000)
  .pipe(
    map(() => 'world...'),
    startWith('Hello!!!!!!'),
  )
  .subscribe(data => console.log(data));