import { Observable } from 'rxjs';

const customObservable = Observable.create(observer => {
  observer.next('Hello');

  setInterval(() => {
    observer.next('Pending...');
  }, 500);

  setTimeout(() => {
    observer.complete();
  }, 5000);
});

customObservable.subscribe({
  next: a => console.log('next:', a),
  complete: b => console.log('complete:', b),
});