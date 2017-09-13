import {Patient} from './patient';
import {Therapist} from './therapist';

export class Clinic {
    public id: string;
    public title: string;
    public address: string;
    public patients: Patient[];
    public therapists: Therapist[];

    public addPatient(patient: Patient) : void {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addClinic(this);
        }
    }

    public addTherapist(therapist: Therapist) : void {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
            therapist.addClinic(this);
        }
    }
}
