import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeachService {

  lang: string = "de-DE";
  speach: SpeechSynthesisUtterance | null = null;

  constructor() {
    if (SpeechSynthesisUtterance) {
      this.speach = new SpeechSynthesisUtterance();
      // this.speachAPI.voice = this.voiceURI;

      // this.speach.voice = ("Google Deutsch" as unknown as SpeechSynthesisVoice);
      this.speach.rate = 1;
      this.speach.lang = this.lang;
    }
  }

  public play(text: string) {
    if (!this.speach || !window.speechSynthesis) return;
    this.speach.text = text.replace(/#/g, "");
    window.speechSynthesis.speak(this.speach);
  }
}
