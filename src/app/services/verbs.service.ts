import { Injectable } from '@angular/core';
import data from "./data/verbs.json";
import { VerbWithPrepostion } from './verb';

@Injectable({
  providedIn: 'root'
})
export class VerbsService {

  private _verbs: Array<VerbWithPrepostion> = data.verbs;

  constructor() { }

  get verbs() {
    return this._verbs;
  }

  sortedByPreposition() {
    return this._verbs.reduce((sorted: {[key: string]: Array<VerbWithPrepostion>}, verb: VerbWithPrepostion) => {
      if (!sorted[verb.preposition]) sorted[verb.preposition] = [];
      sorted[verb.preposition].push(verb);
      return sorted;
    }, {});
  }

  sortedPrepositions() {
    return this._unique(this._verbs.map(v => v.preposition).sort());
  }

  _unique(arr: Array<any>) {
    return [...new Set(arr)];
  }
}
