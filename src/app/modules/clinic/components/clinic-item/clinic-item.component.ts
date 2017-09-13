import {Component, Input, Output, EventEmitter, Inject, OnInit} from '@angular/core';

import {Clinic} from './../../../../models/clinic';
import {ApiClinicCrudService} from './../../../../services/api-clinic-crud.service';
import {ApiClinicCrudInterface} from './../../../../interfaces/services/api-clinic-crud.interface';
import {PatientFactory} from './../../../../factories/models/patient.factory';

@Component({
    selector: 'clinic-item',
    templateUrl: '/app/modules/clinic/components/clinic-item/clinic-item.component.html',
    styleUrls: ['app/modules/clinic/components/clinic-item/clinic-item.component.css']
})
export class ClinicItemComponent implements OnInit{

    @Input() clinic: Clinic;
    @Output() onDeleted = new EventEmitter<Clinic>();

    constructor(
        @Inject(ApiClinicCrudService) private clinicApi: ApiClinicCrudInterface,
        @Inject(PatientFactory) private patientFactory: PatientFactory
    ) {
    }

    onDelete() {
        if (window.confirm('Are you sure?')) {
            this.clinicApi.remove(this.clinic)
                .subscribe(res => {
                    if (res === true) {
                        this.onDeleted.emit(this.clinic);
                    }
                });
        }
    }

    addPatient() {
        let patient = this.patientFactory.createPatient();
        patient.name = 'John';
        this.clinic.addPatient(patient);

        //patient.addClinic(this.clinic);
        this.clinicApi.save(this.clinic)
            .subscribe(res => {
                console.log('patient has been added');
            });
    }

    ngOnInit() {
        console.log(this.clinic);
    }
}
