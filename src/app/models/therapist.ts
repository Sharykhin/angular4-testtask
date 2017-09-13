import {Clinic} from './clinic';
import {Patient} from './patient';

export class Therapist {
    public id: number;
    public position: string;
    public clinics: Clinic[];
    public patients: Patient[];
}
