import { interval } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

const foo = interval(1000)
  .pipe(
    map(data => (
        {
          name: `User #${data}`,
          id: Math.random()
        }
      )
    ),
    pluck('id')
  )
  .subscribe(data => console.log(data));