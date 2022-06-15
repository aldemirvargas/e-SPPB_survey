import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSurveyService } from '../../services/data-survey.service';
import { SurveyService } from '../../services/survey.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-agree',
  templateUrl: './agree.component.html',
  styleUrls: ['./agree.component.css'],
})
export class AgreeComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private readonly notifier: NotifierService;
  constructor(
    public dataSurveyService: DataSurveyService,
    private surveyService: SurveyService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {}
  sendForm() {
    this.subscription.add(
      this.surveyService
        .sendSurvey(this.dataSurveyService.surveyFinal)
        .subscribe({
          next: (data) => {
            const { id } = data.data;
            if (id) {
              this.notifier.show({
                type: 'success',
                message: 'Formulario #' + id + ' agregado correctamente',
                id: id,
              });
            } else {
              this.notifier.show({
                type: 'error',
                message: 'Error al agregar formulario',
              });
            }
          },
          error: (err) => {
            console.log(err);
            this.notifier.show({
              type: 'error',
              message: err,
            });
          },
        })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
