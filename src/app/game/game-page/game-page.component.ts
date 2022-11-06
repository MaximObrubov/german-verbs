import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GifResponse } from 'src/app/services/gif-response';
import { GifsService } from 'src/app/services/gifs.service';
import { VerbWithPrepostion } from 'src/app/services/verb';
import { VerbsService } from 'src/app/services/verbs.service';

export interface Answer {
  verb: string | null,
  preposition: string | null,
  casus: string | null,
  meaning: string | null,
}


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  VERBS_COUNT = 6;
  answersCount = 0;
  CONGRAT_WORD = "success";
  congratGif: string | null = null;
  verbs: Array<string>;
  prepostions: Array<string>;
  cassen: Array<string>;
  meanings: Array<string>;
  answer: Answer;
  verbsWithPrepositions: Array<VerbWithPrepostion> = this.vs.random(this.VERBS_COUNT);
  rightAnswers: Array<string> = this.verbsWithPrepositions.map(v => {
    return this._stringifyVerbWithPreposition(v);
  })

  constructor(
    public host: ElementRef,
    private vs: VerbsService,
    private gifService: GifsService,
    private title: Title,
    private meta: Meta,
  ) {
    this.verbs = this._shuffle(this.verbsWithPrepositions.map(v => v.verb));
    this.prepostions = this._shuffle(this.verbsWithPrepositions.map(v => v.preposition));
    this.meanings = this._shuffle(this.verbsWithPrepositions.map(v => v.meaning));
    this.cassen = this._shuffle(this.verbsWithPrepositions.map(v => v.casus));

    this.answer = {
      verb: null,
      preposition: null,
      casus: null,
      meaning: null,
    }
    this.title.setTitle("Verben2Präpositionen Game");
   }

  ngOnInit(): void {
    this.meta.addTags([
      {name: "description", content: "German verbs with prepositions Game | Deutsche Verben mit Präpositionen; Match verb to preposition and case!"},
      {name: "keywords", content: "Deutsch, Game, Match verb to preposition, German, language, Verbs list, Verbs, Verben, Verbs with prepositions"},
      {name: "robots", content: "index, follow"},
    ]);
  }

  groupChanged(value: string, type: keyof Answer) {
    this.answer[type] = value;

    if (!~Object.values(this.answer).indexOf(null)) {
      if (this._checkAnswer()) {
        this.answersCount++;
        this._hideSelected();
      } else {
        this._errorSelected();
      }
    }

    if (this.answersCount === this.VERBS_COUNT) {
      this.gifService.translate(this.CONGRAT_WORD).subscribe((congratResponse) => {
        this.congratGif = (congratResponse as GifResponse).data.images.original.url;
      });
    }
  }

  reload() {
    window.location.reload();
  }

  _checkAnswer(): boolean {
    return !!~this.rightAnswers.indexOf(this._stringifyVerbWithPreposition(this.answer as VerbWithPrepostion));
  }

  _hideSelected() {
    const RIGHT_CLASS = "right";
    const selectedElements = this.host.nativeElement.querySelectorAll("[type=radio]:checked");
    this._resetAnswer();

    selectedElements.forEach((element: HTMLInputElement) => {
      element.checked = false;
      (element.parentNode as HTMLElement).classList.add(RIGHT_CLASS);
    });
  }

  _errorSelected() {
    const WRONG_CLASS = "wrong";
    const selectedElements = this.host.nativeElement.querySelectorAll("[type=radio]:checked");
    this._resetAnswer();

    selectedElements.forEach((element: HTMLInputElement) => {
      element.checked = false;
      (element.parentNode as HTMLElement).classList.add(WRONG_CLASS);
    });

    setTimeout(() => {
      selectedElements.forEach((element: HTMLInputElement) => {
        (element.parentNode as HTMLElement).classList.remove(WRONG_CLASS);
      });
    }, 400);
  }

  _resetAnswer() {
    this.answer = {
      verb: null,
      preposition: null,
      casus: null,
      meaning: null,
    }
  }

  _stringifyVerbWithPreposition(v: VerbWithPrepostion) {
    return v.verb + v.preposition + v.casus + v.meaning;
  }

  /**
   * Shuffles array, lodash copy
   * @param arr
   * @returns shuffled array
   */
  _shuffle(arr: Array<any>) {
    const length = arr == null ? 0 : arr.length;
    if (!length) return [];

    const lastIndex = length - 1;
    const result = [...arr];
    let index = -1;

    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  }


}
