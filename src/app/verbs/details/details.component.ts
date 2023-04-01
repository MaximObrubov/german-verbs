import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { GifResponse } from 'src/app/services/gif-response';
import { GifsService } from 'src/app/services/gifs.service';
import { VerbWithPrepostion } from 'src/app/services/verb';

@Component({
  selector: 'verb-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailsComponent implements OnInit {

  public verbGifSrc: null | string = null;

  // TODO: move base ULR to configurations
  wikiBaseURL = "https://de.wiktionary.org/wiki/";

  @Input() verb!: VerbWithPrepostion;

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  public get wikiLink() {
    return this.wikiBaseURL + this.verb.verb;
  }

  // showGif() {
  //   this.gifService.translate(this.verb.meaning).subscribe((response) => {
  //     this.verbGifSrc = (response as GifResponse).data.images.downsized_large.url;
  //   })
  // }

  exampleHTML(example: string) {
    const verbReg = new RegExp(`#([a-zA-ZäöüÄÖÜß]+)`, "ig");
    const prepReg = new RegExp(`(\\b(da|wo)?${this.verb.preposition}\\b)`, "ig");
    const baseKlass = "verb-details__example";
    let _example = example.replace(verbReg, this._wrap("$1", baseKlass + "-verb"));
    return _example.replace(prepReg, this._wrap("$1", baseKlass + "-preposition"));
  }

  private _wrap(str: string, klass: string): string {
    return `<b class="${klass}">${str}</b>`
  }

}
