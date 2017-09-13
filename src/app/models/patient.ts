import {Clinic} from './clinic';
import {Therapist} from './therapist';

export class Patient {
    public id: string;
    public name: string;
    public clinics?: Clinic[];
    public therapists?: Therapist[];

    public addClinic(clinic: Clinic) : void {
        let profile = clinic.getProfile();
        this.clinics.push(profile);
    }

    public addTherapist(therapist: Therapist) : void {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
        }
    }

    public getProfile() {
        return {
            id: this.id,
            name: this.name
        }
    }
}
