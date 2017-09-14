import {Injectable, Inject} from '@angular/core';
import {Clinic} from './../../models/clinic';
import {Utils} from './../../services/utils';
import {ClinicRequestInterface as ClinicRequest} from './../../interfaces/request/clinic.request.interface';

@Injectable()
export class ClinicFactory {

    constructor(
        @Inject(Utils) private utils: Utils
    ){

    }
    // TODO: think about using any, it may be better to add optionals fields to ClinicRequest?
    createClinic(parameters?: ClinicRequest | any) : Clinic {
        parameters = parameters || {};
        let clinic = new Clinic();
        clinic.id = parameters.id || this.utils.uuid();
        clinic.title = parameters.title || null;
        clinic.address = parameters.address || null;
        clinic.patients = parameters.patients || [];
        clinic.therapists = parameters.therapists || [];
        return clinic;
    }
}
