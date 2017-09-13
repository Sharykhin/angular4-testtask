import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Clinic} from './../../../../models/clinic';

@Component({
    selector: 'clinic-profile',
    templateUrl: '/app/modules/clinic/components/clinic-profile/clinic-profile.component.html'
})
export class ClinicProfileComponent implements OnInit {

    clinic: Clinic;

    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.data.forEach((data: {clinic: Clinic}) => {
            this.clinic = data.clinic;
        });
    }
}
