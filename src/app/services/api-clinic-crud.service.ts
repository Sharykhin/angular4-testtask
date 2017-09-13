import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs/Rx';
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
        return new Observable((observer: Observer<any>) => {
            let clinic = this.clinicFactory.createClinic();
            clinic.address = parameters.address;
            clinic.title = parameters.title;
            let clinics = JSON.parse(localStorage.getItem(this.storageKey));
            if (clinics === null) {
                localStorage.setItem(this.storageKey, JSON.stringify([clinic]));
            } else {
                clinics.push(clinic);
                localStorage.setItem(this.storageKey, JSON.stringify(clinics));
            }
            observer.next(clinic);
        });
    }

    //TODO: here is we may want to pass pagination parameters
    list(): Observable<Clinic[]> {
        return new Observable((observer: Observer<any>) => {
            let clinics = JSON.parse(localStorage.getItem(this.storageKey));
            observer.next(clinics || []);
        });
    }

    remove(clinic: Clinic): Observable<boolean> {
        return new Observable((observer: Observer<any>) => {
            let clinics = JSON.parse(localStorage.getItem(this.storageKey));
            let filteredClinics = clinics.filter(function (item: Clinic) {
                return item.id !== clinic.id;
            });
            localStorage.setItem(this.storageKey, JSON.stringify(filteredClinics));
            observer.next(true);
        });
    }
}