import { Component, Input, OnInit } from '@angular/core';
import { VerbWithPrepostion } from 'src/app/services/verb';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  THRESHOLD = {
    GOOD: 88,
    NORM: 65,
    BAD: 45
  }

  @Input() attempts: Array<string> = [];
  @Input() errors: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public get result(): number {
    return (this.attempts.length - this.errors.length) / this.attempts.length * 100;
  }

  public get resultKlass(): string {
    return this.result > this.THRESHOLD.GOOD
      ? "good" :  this.result > this.THRESHOLD.NORM ? "normal" : "bad";
  }

}
