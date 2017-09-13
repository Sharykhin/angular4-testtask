import {Patient} from './patient';
import {Therapist} from './therapist';

export class Clinic {
    public id: number;
    public title: string;
    public address: string;
    public patients: Patient[];
    public therapists: Therapist[];
}
