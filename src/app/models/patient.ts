import {Clinic} from './clinic';
import {Therapist} from './therapist';
import {ClinicInterface} from './../interfaces/models/clinit.interface';
import {PatientInterface} from './../interfaces/models/patient.interface';
import {TherapistInterface} from './../interfaces/models/therapist.interface';

export class Patient implements PatientInterface {
    public id: string;
    public name: string;
    public clinics?: ClinicInterface[];
    public therapists?: TherapistInterface[];

    public addClinic(clinic: Clinic) : void {
        const profile = clinic.getProfile();
        this.clinics.push(profile);
    }

    public addTherapist(therapist: Therapist) : void {
        const profile = therapist.getProfile();
        this.therapists.push(therapist);
    }

    public getProfile() : PatientInterface {
        return {
            id: this.id,
            name: this.name
        }
    }
}
