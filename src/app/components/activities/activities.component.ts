import { Component, OnInit } from '@angular/core';
import {Activity} from '../../models/Activity';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  public activities: Activity[] = [];
  constructor() {}

  ngOnInit(): void {}

  deleteActivity(activity: Activity) {
    this.activities = this.activities.filter((a) => a.id !== activity.id);
    this.activities = this.activities.map((a, i)=>{
      a.id = i+1;
      return a;
    });
  }

  addActivity() {
    this.activities.push({
      id: this.activities.length + 1,
      name: '',
      avg: '',
      times: '',
    });
  }
  searchActivity(id: number) {
     let nameActivity = this.activities.find((a) => a.id === id)?.name;
     console.log(nameActivity)
  }
}
