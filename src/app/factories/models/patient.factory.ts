import {Injectable, Inject} from '@angular/core';
import {Patient} from './../../models/patient';
import {Utils} from './../../services/utils';

@Injectable()
export class PatientFactory {

    constructor(
        @Inject(Utils) private utils: Utils
    ){
    }

    createPatient() : Patient {
        let patient = new Patient();
        patient.id = this.utils.uuid();
        patient.clinics = [];
        patient.therapists = [];
        return patient;
    }
}
