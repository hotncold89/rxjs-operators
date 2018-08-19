import { interval } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

const ticker = interval(1000)
  .pipe(
    map(() => 'World!!!'),
    startWith('Hello'),
  )
  .subscribe(data => console.log(data));