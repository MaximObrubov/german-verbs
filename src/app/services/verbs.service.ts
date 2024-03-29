import { Injectable } from '@angular/core';
import data from "../data/verbs_with_prepositions.json";
import irregulars from "../data/verbs_irregular.json";
import { VerbWithPrepostion, VerbIrregular } from './verb';

@Injectable({
  providedIn: 'root'
})
export class VerbsService {

  private _verbs: Array<VerbWithPrepostion> = data.verbs;
  private _irregulars: Array<VerbIrregular> = irregulars.verbs.reduce((akk: VerbIrregular[], arr) => {
    const [verb, meaning, past, perf, additional] = arr;
    akk.push({verb, meaning, past, perf, additional});
    return akk;
  }, []);

  constructor() { }

  get verbs() {
    return this._verbs;
  }

  get irregulars() {
    return this._irregulars;
  }

  sortedByPreposition() {
    return this._verbs.reduce((sorted: {[key: string]: Array<VerbWithPrepostion>}, verb: VerbWithPrepostion) => {
      if (!sorted[verb.preposition]) sorted[verb.preposition] = [];
      sorted[verb.preposition].push(verb);
      return sorted;
    }, {});
  }

  find(substr: string): Array<VerbWithPrepostion> {
    if (!substr) return [];
    if (substr.length < 3) return [];

    // TODO: update data to have isReflecsive flag
    return this._verbs.filter(v => (v.verb.replace('sich', "").trim().startsWith(substr.toLowerCase())));
  }

  sortedPrepositions() {
    return this._unique(this._verbs.map(v => v.preposition).sort());
  }

  random(count: number) {
    const rands: Array<number> = [];
    const l = this._verbs.length;

    while(count--) {
      let rand = Math.floor(Math.random() * l);

      while (rands.indexOf(rand) > -1) {
        rand = Math.floor(Math.random() * l);
      }
      rands.push(rand);
    }

    return rands.map(index => this._verbs[index]);
  }

  _unique(arr: Array<any>) {
    return [...new Set(arr)];
  }
}
