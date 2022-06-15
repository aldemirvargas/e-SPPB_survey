export interface PatientDb {
  id: number;
  name: string;
  address: string;
  email: string;
  subregion: string;
  city: string;
  zone: string;
  phone_number: string;
  cellphone_number: string;
  consent: boolean;
  id_medico: string;
  id_medical_center: number;
  id_companion: string;
  relationship_patient: string;
  companion_name: string;
  companion_address: string;
  companion_phone: string;
  companion_cellphone: string;
  document: string;
  placeofresident: string;
  isurban: boolean;
}
