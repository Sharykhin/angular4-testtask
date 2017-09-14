import {Clinic} from './../../models/clinic';

export interface PatientRequestInterface {
    id?: string;
    name?: string;
    clinics?: Clinic[];
}
