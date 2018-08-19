import { interval } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

const ticker = interval(1000);

ticker.pipe(
  map(data => data * 10)
).subscribe(next => console.log('interval + map:', next));

ticker.pipe(
  mapTo({value: 'foo'})
).subscribe(next => console.log('interval + mapTo:', next));
