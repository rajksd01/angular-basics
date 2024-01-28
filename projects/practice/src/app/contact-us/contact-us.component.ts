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
  dataO = [
    { key: 1, name: 'Raj' },
    { key: 2, name: 'Harry' },
    { key: 3, name: 'Sam' },
    { key: 4, name: 'Krish' },
  ];

  @Input() title!: string;

  @Output() data = new EventEmitter<string>();

  handleChange() {
    this.data.emit('Data from register component');
  }
}
