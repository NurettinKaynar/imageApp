import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-blockable-div',
  template: `
    <div [ngStyle]="style" [ngClass]="class"><ng-content></ng-content></div>
  `,
})
export class BlockableDivComponent {
  @Input() style: any;
  @Input() class: any;

  constructor(private el: ElementRef) {}

  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }
}
