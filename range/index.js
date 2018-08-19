import { range } from 'rxjs';

const rangeObservable$ = range(1, 9);

rangeObservable$.subscribe((data => console.log(`Range emitted ${data}`)));