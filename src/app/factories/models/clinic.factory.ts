import {Injectable, Inject} from '@angular/core';
import {Clinic} from './../../models/clinic';
import {Utils} from './../../services/utils';

@Injectable()
export class ClinicFactory {

    constructor(
        @Inject(Utils) private utils: Utils
    ){

    }

    createClinic() : Clinic {
        let clinic = new Clinic();
        clinic.id = this.utils.uuid();
        return clinic;
    }
}
