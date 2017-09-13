import {Component} from '@angular/core';

@Component({
    selector: 'clinic-dashboard',
    templateUrl: '/app/modules/patient/components/dashboard/dashboard.component.html'
})
export class DashboardComponent  {

    constructor(
    ) {
        console.log('PatientDashboardComponent: constructor');
    }
}
