import { from } from 'rxjs';
import { take } from 'rxjs/operators';

const fibonacciArray = [1, 1, 2, 3, 5, 8, 13];
const fibonacciPromise = new Promise((resolve) => resolve(fibonacciArray));

function* fibonacciGenerator() {
  let a = 0;
  let b = 1;

  while (true) {
    let c = a + b;

    yield c;
    [a, b] = [b, c];
  }
}


from(
  // fibonacciArray
  // fibonacciPromise
  fibonacciGenerator()
).pipe(
  take(10)
)
  .subscribe(data => console.log(data));