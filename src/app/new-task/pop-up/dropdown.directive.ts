import {
  Directive,
  HostBinding,
  HostListener
} from "@angular/core";
@Directive({
  selector: '[dropDown]'
})
export class dropdownDirective {
  @HostBinding('class.open') open = false;
  @HostListener('click') toggleOpen() {
    this.open = !this.open;
  }
}
