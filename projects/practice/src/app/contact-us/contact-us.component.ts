import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppRegister } from '../components/register.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [AppRegister], 
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  @Input() title!: string;

  @Output() data = new EventEmitter<string>();

  handleChange() {
    this.data.emit('Data from register component');
  }
}
