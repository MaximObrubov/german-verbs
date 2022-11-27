import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VerbIrregular } from 'src/app/services/verb';
import { VerbsService } from 'src/app/services/verbs.service';


@Component({
  selector: 'app-irregular-page',
  templateUrl: './irregular-page.component.html',
  styleUrls: ['./irregular-page.component.scss']
})
export class IrregularPageComponent implements OnInit {

  public title = "Starke verben";

  public verbs: Array<VerbIrregular>;

  constructor(
    private verbsServive: VerbsService,
    private titleService: Title,
  ) {
    this.verbs = this.verbsServive.irregulars;
    this.titleService.setTitle(this.title);

    console.group('%c Custom log:', 'background: #00A9A5; color: #00D5DB; font-size: 16px;')
    console.log(this.verbs)
    console.groupEnd()

  }

  ngOnInit(): void {
  }

}
