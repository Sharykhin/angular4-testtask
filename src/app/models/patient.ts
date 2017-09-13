import {Clinic} from './clinic';
import {Therapist} from './therapist';

export class Patient {
    public id: number;
    public name: string;
    public clinics: Clinic[];
    public therapists: Therapist[];

    public addClinic(clinic: Clinic) : void {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addPatient(this);
        }
    }

    public addTherapist(therapist: Therapist) : void {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
            therapist.addPatient(this);
        }
    }
}
