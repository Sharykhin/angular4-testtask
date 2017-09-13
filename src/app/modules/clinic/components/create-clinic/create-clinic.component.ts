import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {ApiClinicCrudService} from './../../../../services/api-clinic-crud.service';
import {ApiClinicCrudInterface} from './../../../../interfaces/services/api-clinic-crud.interface';
import {Clinic} from './../../../../models/clinic';
import {ClinicRequestInterface as ClinicRequest} from './../../../../interfaces/request/clinic.request.interface';
import {Observable}    from 'rxjs/Observable';
import {CanComponentDeactivate} from './../../../../guards/confirm-deactivate.guard';
import {ClinicFactory} from './../../../../factories/models/clinic.factory';

@Component({
    selector: 'clinic-create-clinic',
    templateUrl: '/app/modules/clinic/components/create-clinic/create-clinic.component.html'
})
export class CreateClinicComponent implements OnInit, CanComponentDeactivate {

    private formDirty: boolean = false;

    public clinic: Clinic;

    constructor(
        @Inject(ApiClinicCrudService) private clinicApi: ApiClinicCrudInterface,
        @Inject(Router) private router: Router,
        @Inject(ClinicFactory) private clinicFactory: ClinicFactory
    ) {
    }

    onCreate(clinic: ClinicRequest) : void {
        this.clinicApi.create(clinic)
            .subscribe((newClinic: Clinic) => {
                this.formDirty = false;
                this.router.navigate(['/clinics']);
            });
    }

    isFormDirty(value: boolean): void {
        this.formDirty = value;
    }

    canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
        return this.formDirty ? window.confirm('Do you really want to cancel your changes?') : true;
    }

    ngOnInit() : void {
        this.clinic = this.clinicFactory.createClinic();
    }
}
