import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/Activity';

@Component({
  selector: 'app-physical-activity',
  templateUrl: './physical-activity.component.html',
  styleUrls: ['./physical-activity.component.css']
})
export class PhysicalActivityComponent implements OnInit {
  public activities: Activity[] = [];
public physicalActivity = {
  q1: null,
  q2: null,
  q3: null,
  q4: null,
  q5: null,
  q6: null,
  q7: null,
  activities: this.activities
}
  constructor() { }

  ngOnInit(): void {
  }
  setAnswer(key: string, value: number) {
    this.physicalActivity[key] = value;
  }

}
