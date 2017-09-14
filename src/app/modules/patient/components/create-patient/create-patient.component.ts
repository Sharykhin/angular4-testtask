import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiPatientCrudService } from './../../../../services/api-patient-crud.service';
import { ApiPatientCrudInterface } from './../../../../interfaces/services/api-patient-crud.interface';
import { Patient } from './../../../../models/patient';
import { PatientRequestInterface } from './../../../../interfaces/request/patient.request.interface';
import { Observable }    from 'rxjs/Observable';
import { CanComponentDeactivate } from './../../../../guards/confirm-deactivate.guard';
import { PatientFactory } from './../../../../factories/models/patient.factory';

@Component({
    selector: 'patient-create-patient',
    templateUrl: '/app/modules/patient/components/create-patient/create-patient.component.html'
})
export class CreatePatientComponent implements OnInit, CanComponentDeactivate {

    private formDirty: boolean = false;

    public patient: Patient;

    constructor(
        @Inject(ApiPatientCrudService) private patientApi: ApiPatientCrudInterface,
        @Inject(Router) private router: Router,
        @Inject(PatientFactory) private patientFactory: PatientFactory
    ) {
    }

    onCreate(patient: PatientRequestInterface) : void {
        this.patientApi.create(patient)
            .subscribe((newPatient: Patient) => {
                this.formDirty = false;
                this.router.navigate(['/patients']);
            });
    }

    isFormDirty(value: boolean): void {
        this.formDirty = value;
    }

    canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
        return this.formDirty ? window.confirm('Do you really want to cancel your changes?') : true;
    }

    ngOnInit() : void {
        this.patient = this.patientFactory.createPatient();
    }
}
