import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppRegister } from './components/register.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    AppRegister,
    ContactUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello World';

  onKeyUp(customtitle: string) {
    this.title = customtitle;
  }
  data = 'K xa kta ho';

  workData = {
    name: 'Xyz',
    age: 19,
    location: 'AAA123Street',
  };
  onNameChange(name: string) {
    this.workData.name = name;
  }
  handleData($event: any) {
    console.log($event);
  }

  titlefirst = 'title1';
  titlesecond = 'title2';
}
