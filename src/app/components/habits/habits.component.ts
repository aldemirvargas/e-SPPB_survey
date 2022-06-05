import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {
public habits: any = {
  q1: null,
  q2: null,
  q3: null,
  q4: null,
  q5: null,
  q6: null
}
  constructor() { }

  ngOnInit(): void {
  }
}
