import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { ApiPatientCrudInterface } from './../interfaces/services/api-patient-crud.interface';
import { Patient } from './../models/patient';
import { PatientRequestInterface } from './../interfaces/request/patient.request.interface';
import { PatientFactory } from './../factories/models/patient.factory';

@Injectable()
export class ApiPatientCrudService implements ApiPatientCrudInterface {

    protected readonly storageKey: string = 'patients';

    constructor(
        private patientFactory: PatientFactory
    ) {
    }

    create(parameters: PatientRequestInterface) : Observable<Patient> {
        return new Observable((observer: Observer<any>) => {
            let patient = this.patientFactory.createPatient(parameters);
            // TODO: it's better to move it to service since we may want to switch to sessionStorage or cookies.
            let patients = JSON.parse(localStorage.getItem(this.storageKey));
            if (patients === null) {
                localStorage.setItem(this.storageKey, JSON.stringify([patient]));
            } else {
                patients.push(patient);
                localStorage.setItem(this.storageKey, JSON.stringify(patients));
            }
            observer.next(patient);
        });
    }

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
