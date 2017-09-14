import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs/Rx';
import {ApiPatientCrudInterface} from './../interfaces/services/api-patient-crud.interface';
import {Patient} from './../models/patient';

@Injectable()
export class ApiPatientCrudService implements ApiPatientCrudInterface {

    protected readonly storageKey: string = 'patients';

    save(patient: Patient): Observable<boolean> {
        return new Observable((observer: Observer<any>) => {
            let patients = JSON.parse(localStorage.getItem(this.storageKey)) || [];
            // Use every to stop iterating as soon as we find item.
            let filteredPatients = patients.filter(function (item: Patient) {
                return item.id !== patient.id;
            });
            filteredPatients.push(patient);
            console.log('save patient');
            localStorage.setItem(this.storageKey, JSON.stringify(filteredPatients));
            observer.next(true);
        });
    }
}
