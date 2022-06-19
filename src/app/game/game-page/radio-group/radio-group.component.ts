import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  @Input() values!: Array<any>;
  @Input() name!: string;
  @Output() selectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.selectedEvent.emit(value);
  }

}
