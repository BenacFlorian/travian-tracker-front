import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[verticalTab]',
  standalone: true
})
export class VerticalTabDirective {
  @Input('verticalTab') tabTitle!: string;
  constructor(public templateRef: TemplateRef<any>) {}
}