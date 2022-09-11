import { Component, Input, OnInit } from '@angular/core';
import { GifResponse } from 'src/app/services/gif-response';
import { GifsService } from 'src/app/services/gifs.service';
import { VerbWithPrepostion } from 'src/app/services/verb';

@Component({
  selector: 'verb-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public verbGifSrc: null | string = null;

  @Input() verb!: VerbWithPrepostion;

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  showGif() {
    this.gifService.translate(this.verb.meaning).subscribe((response) => {
      this.verbGifSrc = (response as GifResponse).data.images.downsized_large.url;
    })
  }

}
