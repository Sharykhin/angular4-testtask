import {Clinic} from './clinic';
import {Therapist} from './therapist';

export class Patient {
    public id: number;
    public name: string;
    public clinics: Clinic[];
    public therapists: Therapist[];

    public addClinic(clinic: Clinic) {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addPatioen(this);
        }
    }
}
