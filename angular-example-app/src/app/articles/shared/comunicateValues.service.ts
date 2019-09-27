import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicateValuesService {
  votes = 0;

constructor() { }

getVotes() {
  return this.votes;
}

setVotes(value) {
  this.votes = value;
}
}
