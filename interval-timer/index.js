import { interval, timer } from 'rxjs';

const ticker = interval(1000);
ticker.subscribe(data => console.log(data));

const tickerWithDelay = timer(2000, 1000);
tickerWithDelay.subscribe(data => console.log(data));