import { interval } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const ticker = interval(800);

ticker
  .pipe(
    tap(data => console.log('Original data: ', data)),
    map(data => data * 2),
    tap(data => console.log('Mapped data: ', data)),
  )
  .subscribe();