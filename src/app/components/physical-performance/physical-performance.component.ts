import { Component, OnInit } from '@angular/core';
import { DataSurveyService } from '../../services/data-survey.service';

@Component({
  selector: 'app-physical-performance',
  templateUrl: './physical-performance.component.html',
  styleUrls: ['./physical-performance.component.css'],
})
export class PhysicalPerformanceComponent implements OnInit {
  public pshysicalPerformance: any = {
    scopeFunctionality: {
      firstTry: {
        distance1: 0,
        distance2: 0,
        distanceFinal: 0,
      },
      secondTry: {
        distance1: 0,
        distance2: 0,
        distanceFinal: 0,
      },
      maxDistance: 0,
    },
    balanceTestFoot: {
      points: null,
      duration: null,
      doNotTry: false,
      doNotTryComment: null,
    },
    balanceTestSemitamdem: {
      points: null,
      duration: null,
      doNotTry: false,
      doNotTryComment: null,
    },
    balanceTestTamdem: {
      points: null,
      duration: null,
      doNotTry: false,
      doNotTryComment: null,
    },
    balanceTestTotalPoints: null,
    speedtestA: {
      timeWalking: null,
      doNotTryComment: null,
    },
    speedtestB: {
      timeWalking: null,
      doNotTryComment: null,
    },
    helpForWalkingA: null,
    helpForWalkingPoints: null,
    helpForWalkingB: null,
    walkingMinTime: null,
    standingSafety: null,
    pointsStandingSafety: null,
    armsResultPoints: null,
    armsResultComment: null,
    standingSafety5Min: null,
    enable5Steps: false,
    timeStanding5Steps: null,
    doNotCOmplete5Steps: false,
    standingSafety5MinComment: null,
    pointsForStanding5Min: null,
    totalPointsSPPB: null,
  };
  constructor(
    public dataSurveyService: DataSurveyService
  ) {}

  ngOnInit(): void {
    this.dataSurveyService.surveyFinal.pshysicalPerformance = this.pshysicalPerformance;
  }
  changeDistance() {
    this.pshysicalPerformance.scopeFunctionality.firstTry.distanceFinal =
      this.pshysicalPerformance.scopeFunctionality.firstTry.distance1 +
      this.pshysicalPerformance.scopeFunctionality.firstTry.distance2;
    this.pshysicalPerformance.scopeFunctionality.secondTry.distanceFinal =
      this.pshysicalPerformance.scopeFunctionality.secondTry.distance1 +
      this.pshysicalPerformance.scopeFunctionality.secondTry.distance2;
    this.pshysicalPerformance.scopeFunctionality.maxDistance = Math.max(
      this.pshysicalPerformance.scopeFunctionality.firstTry.distanceFinal,
      this.pshysicalPerformance.scopeFunctionality.secondTry.distanceFinal
    );
  }

  setAnswer(key: string, value: string) {
    this.pshysicalPerformance[key] = value;
  }
  setAnswerBalance(key: string, value: number) {
    if (value === 0) {
      this.pshysicalPerformance[key].doNotTry = true;
    } else {
      this.pshysicalPerformance[key].doNotTry = false;
    }
    this.pshysicalPerformance[key].points = value;
    this.recalculateTotalPoints();
  }
  setAnswerBalanceTry(key: string, value: string) {
    this.pshysicalPerformance[key].doNotTryComment = value;
  }
  setAnswerSpeedtest(key: string, value: string) {
    this.pshysicalPerformance[key].doNotTryComment = value;
  }
  recalculateTotalPoints() {
    this.pshysicalPerformance.balanceTestTotalPoints =
      this.pshysicalPerformance.balanceTestFoot.points +
      this.pshysicalPerformance.balanceTestSemitamdem.points +
      this.pshysicalPerformance.balanceTestTamdem.points;
      this.recalculatetotalPointsSPPB();
  }
  setPoints(key: string, value: number) {
    if(key === 'pointsForStanding5Min'){
      this.pshysicalPerformance.enable5Steps = false;
    }
    this.pshysicalPerformance[key] = value;
    this.recalculatetotalPointsSPPB();
  }
  setPointsWalking() {
    let range = this.pshysicalPerformance.walkingMinTime;
    if (range >= 8.7) {
      this.pshysicalPerformance.helpForWalkingPoints = 1;
    } else if (range >= 6.21 && range < 8.7) {
      this.pshysicalPerformance.helpForWalkingPoints = 2;
    } else if (range >= 4.82 && range < 6.21) {
      this.pshysicalPerformance.helpForWalkingPoints = 3;
    } else if (range < 4.82) {
      this.pshysicalPerformance.helpForWalkingPoints = 4;
    }else{
      this.pshysicalPerformance.helpForWalkingPoints = 0;
    }
    this.recalculatetotalPointsSPPB();
  }
  setPointsSit() {
    let range = this.pshysicalPerformance.timeStanding5Steps;
    if (range > 60 || this.pshysicalPerformance.doNotCOmplete5Steps) {
      this.pshysicalPerformance.pointsForStanding5Min = 0;
    } else if (range >= 16.7 && range < 60) {
      this.pshysicalPerformance.pointsForStanding5Min = 1;
    } else if (range >= 13.7 && range < 16.7) {
      this.pshysicalPerformance.pointsForStanding5Min = 2;
    } else if (range >= 11.2 && range < 13.7) {
      this.pshysicalPerformance.pointsForStanding5Min = 3;
    } else if (range < 11.2) {
      this.pshysicalPerformance.pointsForStanding5Min = 4;
    }else{
      this.pshysicalPerformance.pointsForStanding5Min = 0;
    }
    this.recalculatetotalPointsSPPB();
  }
  recalculatetotalPointsSPPB() {
    this.pshysicalPerformance.totalPointsSPPB =
      this.pshysicalPerformance.balanceTestTotalPoints +
      this.pshysicalPerformance.helpForWalkingPoints +
      this.pshysicalPerformance.pointsForStanding5Min;
  }
}
