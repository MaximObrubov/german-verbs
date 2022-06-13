import { Component, OnInit } from '@angular/core';
import { VerbWithPrepostion } from 'src/app/services/verb';
import { VerbsService } from 'src/app/services/verbs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public verbs: Array<VerbWithPrepostion>;

  constructor(vs: VerbsService) {
    this.verbs = vs.verbs;
  }

  ngOnInit(): void {
  }

}
