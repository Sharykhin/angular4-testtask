import {Clinic} from './clinic';
import {Patient} from './patient';

export class Therapist {
    public id: string;
    public position: string;
    public clinics: Clinic[];
    public patients: Patient[];

    public addClinic(clinic: Clinic) : void {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addTherapist(this);
        }
    }

    public addPatient(patient: Patient) : void {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addTherapist(this);
        }
    }
}
