import { of } from 'rxjs';

of(1, {name: 'Jhon'}, 'He', [1, 2, 3], 'llo').subscribe(data => console.log(data));