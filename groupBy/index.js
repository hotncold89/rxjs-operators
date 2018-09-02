import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 },
];

from(people).pipe(
  groupBy(person => person.age),
  // return each item in group as array
  mergeMap(group => group.pipe(toArray()))
).subscribe(data => console.log(data));
/*
  output:
  [{age: 25, name: "Sue"}, {age: 25, name: "Frank"}]
  [{age: 30, name: "Joe"}]
  [{age: 35, name: "Sarah"}]
*/
