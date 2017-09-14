import {Injectable, Inject} from '@angular/core';
import {Patient} from './../../models/patient';
import {Utils} from './../../services/utils';
import {PatientRequestInterface} from './../../interfaces/request/patient.request.interface';

@Injectable()
export class PatientFactory {

    constructor(
        @Inject(Utils) private utils: Utils
    ){
    }

    createPatient(parameters?: PatientRequestInterface) : Patient {
        parameters = parameters || {};
        let patient = new Patient();
        patient.id = this.utils.uuid();
        patient.name = parameters.name || null;
        patient.clinics = parameters.clinics || [];
        patient.therapists = [];
        return patient;
    }
}
