import { NgModule }  from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { routing } from './clinic.routing';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { CreateClinicComponent }  from './components/create-clinic/create-clinic.component';
import { ClinicFormComponent }  from './components/clinic-form/clinic-form.component';
import { ClinicListComponent }  from './components/clinic-list/clinic-list.component';
import { ClinicItemComponent }  from './components/clinic-item/clinic-item.component';
import { ClinicProfileComponent }  from './components/clinic-profile/clinic-profile.component';
import { ClinicResolver } from './resolvers/clinic.resolver';

@NgModule({
    imports:      [ routing, CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ DashboardComponent, CreateClinicComponent, ClinicFormComponent, ClinicListComponent, ClinicItemComponent, ClinicProfileComponent ],
    bootstrap:    [],
    providers:    [ ClinicResolver ],
})
export class ClinicModule {}