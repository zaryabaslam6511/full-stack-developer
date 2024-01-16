import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = new Date();
  todaysDataTime = '';
  hours;
  minutes;
  seconds;

  constructor() {
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    let now = new Date();
    var d = new Date(this.today);
    this.hours = d.getHours();
    this.minutes = d.getMinutes()
    this.seconds = d.getSeconds()
  }

}
