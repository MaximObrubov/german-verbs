import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  @Input() values!: Array<any>;
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }


  onChange(value: string) {
    console.group('%c Custom log:', 'background: #00A9A5; color: #00D5DB; font-size: 16px;')
    console.log(value)
    console.groupEnd()

  }

}
