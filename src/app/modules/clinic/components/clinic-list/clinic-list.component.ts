import { Component, OnInit,Inject } from '@angular/core';

import {Clinic} from './../../../../models/clinic';
import {ApiClinicCrudService} from './../../../../services/api-clinic-crud.service';
import {ApiClinicCrudInterface} from './../../../../interfaces/services/api-clinic-crud.interface';

@Component({
    selector: 'clinic-list',
    templateUrl: '/app/modules/clinic/components/clinic-list/clinic-list.component.html'
})
export class ClinicListComponent implements OnInit {

    clinics: Clinic[];

    constructor(
        @Inject(ApiClinicCrudService) private clinicApi: ApiClinicCrudInterface
    ) {
    }

    ngOnInit() {
        this.clinicApi.list()
            .subscribe(clinics => {
               this.clinics = clinics;
            });
    }

    onDelete(clinic: Clinic) {
        this.clinics.splice(this.clinics.indexOf(clinic), 1);
    }
}
