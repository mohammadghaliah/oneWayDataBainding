import { Component, VERSION } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  firstName: string = 'Sachin';
  lastName: string = 'Tendulkar';
  value = '';
  ng: any;
  isDisabled: boolean = true;

  onSave() {
    console.log('hi');
  }

  handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
  }

  onSave2(element) {
    console.log(element.value);
  }

  onSave3(form: NgForm) {
    console.log(this.ng);
  }
}
