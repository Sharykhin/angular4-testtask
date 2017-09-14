import {Clinic} from './clinic';
import {Patient} from './patient';
import {TherapistInterface} from './../interfaces/models/therapist.interface';
import {PatientInterface} from './../interfaces/models/patient.interface';
import {ClinicInterface} from './../interfaces/models/clinit.interface';

export class Therapist implements TherapistInterface {
    public id: string;
    public position: string;
    public clinics: ClinicInterface[];
    public patients: PatientInterface[];

    public addClinic(clinic: Clinic) : void {
        const profile = clinic.getProfile();
        this.clinics.push(profile)
    }

    public addPatient(patient: Patient) : void {
        const profile = patient.getProfile();
        this.patients.push(profile);
    }

    public getProfile() : TherapistInterface {
        return {
            id: this.id,
            position: this.position
        };
    }
}
