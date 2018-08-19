import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// emits if the current value is different from the previous one
const array = [1, 1, 2, 2, 2, 3, 3];

from(array)
  .pipe(
    distinctUntilChanged(),
  )
  .subscribe(data => console.log(data));