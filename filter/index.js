import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

const ticker = interval(1000);

const oddTicker = ticker.pipe(
  filter(tick => tick % 2 === 0)
).subscribe(data => console.log(data));