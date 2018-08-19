import { throwError } from 'rxjs';

throwError('Some error')
  .subscribe({
    next: next => console.log(next),
    error: error => console.log(error),
  });