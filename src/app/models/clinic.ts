import {Patient} from './patient';
import {Therapist} from './therapist';

export class Clinic {
    public id: string;
    public title: string;
    public address: string;
    public patients: Patient[];
    public therapists: Therapist[];

    public addPatioen(patient: Patient) {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addClinic(this);
        }
    }
}
