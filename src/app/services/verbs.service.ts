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
}
