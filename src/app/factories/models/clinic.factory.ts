import {Injectable} from '@angular/core';
import {Clinic} from './../../models/clinic';

@Injectable()
export class ClinicFactory {
    createClinic() : Clinic {
        return new Clinic();
    }
}
