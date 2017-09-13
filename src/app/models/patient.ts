import {Clinic} from './clinic';
import {Therapist} from './therapist';

export class Patient {
    public id: number;
    public name: string;
    public clinics: Clinic[];
    public therapists: Therapist[];
}
