import { Person } from './Person';
import { Medical } from './Medical';
import { MedicalCenterDb } from './MedicalCenterDb';
export interface Survey {
  evaluator: Medical;
  participant: Person;
  companion: Person;
  medicalCenter: MedicalCenterDb;
  date: string;
  minimentalTestForm: any;
  demographicInit: any;
  demographicCronicConditions: any;
  habits: any;
  physicalActivity: any;
  livingSpace: any;
  enviromentBuild: any;
  pshysicalPerformance: any;
}
