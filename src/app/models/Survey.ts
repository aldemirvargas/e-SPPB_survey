import { Person } from './Person';
import { Medical } from './Medical';
export interface Survey {
    medical: Medical;
    patient: Person;
    companion: Person;
    date: string;
}