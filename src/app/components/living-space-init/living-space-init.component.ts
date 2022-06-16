import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';
import { SurveyService } from '../../services/survey.service';
import { QuestionsDb } from '../../models/QuestionsDb';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-living-space-init',
  templateUrl: './living-space-init.component.html',
  styleUrls: ['./living-space-init.component.css'],
})
export class LivingSpaceInitComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public questionsFrecuency: QuestionsDb[] = [];
  public livingSpace: any = [];
  private readonly notifier: NotifierService;
  constructor(
    public dataSurveyService: DataSurveyService,
    private surveyService: SurveyService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.livingSpace = this.livingSpace;
    this.subscription.add(
    this.surveyService.getAllQuestions().subscribe({
      next: (data) => {
        this.dataSurveyService.allQuestions = data;
        this.buildObject();
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
  setAnswer(type: string, question_id: number, answer: string) {
    this.livingSpace.find((question) => question.question_id === question_id)[
      type
    ] = answer;
  }
  buildObject() {
    this.dataSurveyService.allQuestions.forEach((question) => {
      if (question.name === 'question_frecuency') {
        this.questionsFrecuency.push(question);
        this.livingSpace.push({
          question_id: question.id,
          answer: null,
          frequency: null,
          independence: null,
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
