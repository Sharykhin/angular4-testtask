import {Patient} from './patient';
import {Therapist} from './therapist';

export class Clinic {
    public id: string;
    public title: string;
    public address: string;
    public patients: Patient[];
    public therapists: Therapist[];

    public addPatient(patient: Patient) : void {
        let profile = patient.getProfile();
        this.patients.push(profile);
        patient.addClinic(this);
    }

    public addTherapist(therapist: Therapist) : void {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
        }
    }

    public getProfile() {
        return {
            id: this.id,
            title: this.title,
            address: this.address
        }
    }
}
