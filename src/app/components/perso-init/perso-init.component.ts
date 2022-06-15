import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../../models/Person';
import { SurveyService } from '../../services/survey.service';
import * as dayjs from 'dayjs';
import { Medical } from '../../models/Medical';
import { __classPrivateFieldGet } from 'tslib';
import { DataSurveyService } from '../../services/data-survey.service';
import { PatientDb } from '../../models/PatientDb';
import { MedicalCenterDb } from '../../models/MedicalCenterDb';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-perso-init',
  templateUrl: './perso-init.component.html',
  styleUrls: ['./perso-init.component.css'],
})
export class PersoInitComponent implements OnInit, OnDestroy {
  private readonly notifier: NotifierService;
  private subscription:Subscription = new Subscription();
  public currentDate: string = dayjs().format('YYYY-MM-DD');
  public evaluators: Medical[] = [];
  public patients: PatientDb[] = [];
  public searchingEvaluator: boolean = false;
  public searchingPatient: boolean = false;

  public currentEvaluator: Medical = {
    id: null,
    name: null,
    date_birth: null,
    email: null,
    phone_number: null,
    document: null,
  };

  public participant: Person = {
    id: null,
    name: '',
    document: '',
    address: '',
    email: '',
    subRegion: '',
    municipality: '',
    zone: '',
    placeOfResident: '',
    isUrban: false,
    phone: '',
    celPhone: '',
    relationship: '',
  };

  public companion: Person = {
    id: null,
    name: '',
    document: '',
    address: '',
    email: '',
    subRegion: '',
    municipality: '',
    zone: '',
    placeOfResident: '',
    isUrban: false,
    phone: '',
    celPhone: '',
    relationship: '',
  };

  public medicalCenter: MedicalCenterDb = {
    id: null,
    medical_center_name: null,
    medical_center_city: null,
    medical_center_state: null,
    medical_center_address: null,
    lat: null,
    long: null,
  };
  
  constructor(
    private surveyService: SurveyService,
    public dataSurveyService: DataSurveyService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.searchingEvaluator = false;
    this.searchingPatient = false;
    
    this.dataSurveyService.surveyFinal.evaluator = this.currentEvaluator;
    this.dataSurveyService.surveyFinal.participant = this.participant;
    this.dataSurveyService.surveyFinal.companion = this.companion;
    this.dataSurveyService.surveyFinal.date = this.currentDate;
    this.dataSurveyService.surveyFinal.medicalCenter = this.medicalCenter;
      

  }

  
  searchEvaluator(event: Event) {
    let value = event.target['value'];
    if (value && value.length > 2) {
      this.searchingEvaluator = true;
      this.subscription.add(
      this.surveyService.getMedicalByDocument(value).subscribe({
        next: (response) => {
          this.evaluators = response;
        },
        error: (error) => {
          console.log(error);
        },
      })
      );
    } else {
      this.evaluators = [];
    }
  }
  setEvaluator(evaluator: Medical) {
    this.currentEvaluator.id = evaluator.id;
    this.currentEvaluator.name = evaluator.name;
    this.currentEvaluator.date_birth = evaluator.date_birth;
    this.currentEvaluator.email = evaluator.email;
    this.currentEvaluator.phone_number = evaluator.phone_number;
    this.currentEvaluator.document = evaluator.document;

    this.evaluators = [];
    this.searchingEvaluator = false;
  }
  
  searchPatient(event: Event) {
    let value = event.target['value'];
    if (value && value.length > 2) {
      this.searchingPatient = true;
      this.subscription.add(
      this.surveyService.getPatientByName(value).subscribe({
        next: (response) => {
          this.patients = response;
        },
        error: (error) => {
          console.log(error);
        },
      })
      );
    } else {
      this.patients = [];
    }
  }
  setPatient(patient: PatientDb) {
    this.participant.id = patient.id;
    this.participant.name = patient.name;
    this.participant.document = patient.document;
    this.participant.address = patient.address;
    this.participant.email = patient.email;
    this.participant.subRegion = patient.subregion;
    this.participant.municipality = patient.city;
    this.participant.zone = patient.zone;
    this.participant.placeOfResident = patient.placeofresident;
    this.participant.isUrban = patient.isurban;
    this.participant.phone = patient.phone_number;
    this.participant.celPhone = patient.cellphone_number;

    this.companion.id = Number(patient.id_companion);
    this.companion.relationship = patient.relationship_patient;
    this.companion.name = patient.companion_name;
    this.companion.document = patient.id_companion;
    this.companion.address = patient.companion_address;
    this.companion.phone = patient.companion_phone;
    this.companion.celPhone = patient.companion_cellphone;

    this.getMedicalCenter(patient.id_medical_center);

    this.patients = [];
    this.searchingPatient = false;
  }
  getMedicalCenter(id: number) {
    this.subscription.add(
    this.surveyService.getMedicalCenterById(id).subscribe({
      next: (response) => {
        this.medicalCenter.id = response.id;
        this.medicalCenter.medical_center_name = response.medical_center_name;
        this.medicalCenter.medical_center_city = response.medical_center_city;
        this.medicalCenter.medical_center_state = response.medical_center_state;
        this.medicalCenter.medical_center_address = response.medical_center_address;
        this.medicalCenter.lat = response.lat;
        this.medicalCenter.long = response.long;

      },
      error: (error) => {
        console.log(error);
      },
    })
    );
  }

  averQuePasa() {
    this.notifier.show({
      type: 'error',
      message: 'Formulario # agregado correctamente',
      id: 'id', 
    });
    console.log(this.dataSurveyService.surveyFinal);
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
