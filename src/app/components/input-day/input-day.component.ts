import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../model/activity';


@Component({
  selector: 'app-input-day',
  templateUrl: './input-day.component.html',
  styleUrls: ['./input-day.component.css']
})
export class InputDayComponent implements OnInit {

  @Input()
  date: string;

  @Input()
  dayOfWeek: string;

  activities: Activity[];

  overtime: string = '00:00';

  constructor() {
    const activity = new Activity();
    activity.nr = 1;
    this.activities = new Array<Activity>();
    this.activities.push(activity);
  }

  ngOnInit() {
  }

  isLastActivity(i: number): boolean {
    const maxNr = Math.max(...this.activities.map(o => o.nr));
    if (i === maxNr) {
      return true;
    } else {
      return false;
    }
  }

  addActivity(i: number) {
    const activity = new Activity();
    activity.nr = i + 1;
    this.activities.push(activity);
  }

  deleteActivity(i: number) {
    const index = this.activities.map(o => o.nr).indexOf(i);
    this.activities.splice(index, 1);
  }
}