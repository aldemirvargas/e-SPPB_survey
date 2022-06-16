import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Activity } from '../../models/Activity';
import { ActivityDb } from '../../models/ActivityDb';
import { SurveyService } from '../../services/survey.service';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public activities: Activity[] = [];
  public allActivities: ActivityDb[] = [];
  public currentSearchInput: number = null;
  private readonly notifier: NotifierService;
  constructor(
    private surveyService: SurveyService,
    notifierService: NotifierService
    ) {
    this.notifier = notifierService;
    }

  @Output() value = new EventEmitter<Activity[]>();
  ngOnInit(): void {}

  deleteActivity(activity: Activity) {
    this.activities = this.activities.filter((a) => a.id !== activity.id);
    this.activities = this.activities.map((a, i) => {
      a.id = i + 1;
      return a;
    });
    this.changesInModel();
  }

  addActivity() {
    this.activities.push({
      id: this.activities.length + 1,
      name: '',
      avg: '',
      times: '',
    });
  }

  searchActivity(event: Event, inputId: number) {
    this.currentSearchInput = inputId;
    let name = event.target['value'];
    if (name && name.length > 2) {
      this.subscription.add(
        this.surveyService.getActivityByName(name).subscribe({
          next: (data) => {
            this.allActivities = data;
          },
          error: (error) => {
            this.notifier.show({
              type: 'error',
              message: error.error.message,
            });
          },
        })
      );
    }
    this.changesInModel();
  }

  changesInModel() {
    let activities = this.activities.filter((a) => a.name && a.name !== '');
    this.value.emit(activities);
  }

  setActivity(activity: Activity, activityFind: ActivityDb) {
    activity.name = activityFind.activity;
    activity.avg = activityFind.average;
    activity.times = activityFind.frequency;
    this.allActivities = [];
    this.changesInModel();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
