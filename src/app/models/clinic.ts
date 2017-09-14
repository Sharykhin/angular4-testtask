import {Patient} from './patient';
import {Therapist} from './therapist';
import {ClinicInterface} from './../interfaces/models/clinit.interface';
import {PatientInterface} from './../interfaces/models/patient.interface';
import {TherapistInterface} from './../interfaces/models/therapist.interface';

export class Clinic implements ClinicInterface {
    public id: string;
    public title: string;
    public address: string;
    public patients: PatientInterface[];
    public therapists: TherapistInterface[];

    public addPatient(patient: Patient) : void {
        const profile = patient.getProfile();
        this.patients.push(profile);
    }

    public addTherapist(therapist: Therapist) : void {
        const profile = therapist.getProfile();
        this.therapists.push(therapist);
    }

    public getProfile() : ClinicInterface {
        return {
            id: this.id,
            title: this.title,
            address: this.address
        }
    }
}
