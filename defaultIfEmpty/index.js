import { EMPTY } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';

EMPTY
  .pipe(
    defaultIfEmpty('Hello! I am a default value!'),
  )
  .subscribe(data => console.log(data));
