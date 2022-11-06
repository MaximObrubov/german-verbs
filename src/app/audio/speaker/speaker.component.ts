import { Component, Input, OnInit } from '@angular/core';
import { SpeachService } from 'src/app/services/speach.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  @Input() text!: string;

  public isSpeachAPI = window.SpeechSynthesisUtterance !== undefined;

  constructor(private speachService: SpeachService) {
  }

  ngOnInit(): void {
  }

  onPlay() {
    this.speachService.play(this.text);
  }
}
