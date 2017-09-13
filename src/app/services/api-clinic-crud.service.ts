import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ApiClinicCrudInterface} from './../interfaces/services/api-clinic-crud.interface';
import {Clinic} from './../models/clinic';
import {ClinicFactory} from './../factories/models/clinic.factory';
import {ClinicRequestInterface as ClinicRequest} from './../interfaces/request/clinic.request.interface';

@Injectable()
export class ApiClinicCrudService implements ApiClinicCrudInterface {

    protected readonly storageKey: string = 'clinics';

    constructor(
        private clinicFactory: ClinicFactory
    ) {
    }

    create(parameters: ClinicRequest) : Observable<Clinic> {
        return new Observable(observer => {
            let clinic = this.clinicFactory.createClinic();
            clinic.address = parameters.address;
            clinic.title = parameters.title;
            // let clinics = localStorage.getItem(this.storageKey);
            //localStorage.setItem('clinics', 1);
            observer.next(clinic)
        });
    }
}