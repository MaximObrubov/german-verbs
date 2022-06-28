import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  @Input() values!: Array<any>;
  @Input() name!: string;
  @Output() selectedEvent = new EventEmitter<string>();

  constructor(public host: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const buttons = this.host.nativeElement.querySelectorAll("fieldset label span");
    const pixelify = (val: number) => `${val}px`;
    buttons.forEach((b: HTMLElement) => {
      const rect = b.getBoundingClientRect();
      b.style.height = pixelify(rect.height);
      b.style.width = pixelify(rect.width);
    });

  }

  onChange(value: string) {
    this.selectedEvent.emit(value);
  }

}
