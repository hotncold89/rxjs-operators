import { of } from 'rxjs';
import { single, take } from 'rxjs/operators';


// 'single' operator takes the first emitted value,
// but throws the error if there are more than one of the values were emitted

// of(1, 2, 3).pipe(
//   take(1),
//   single()
// )
//   .subscribe(data => console.log(data));


// 'single' operator can take a predicate function as an argument.

of(1, 2, 3).pipe(
  single(n => n % 2 === 0)
)
  .subscribe(data => console.log(data));
