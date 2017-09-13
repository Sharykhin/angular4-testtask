import { NgModule }  from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { routing } from './clinic.routing';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { CreateClinicComponent }  from './components/create-clinic/create-clinic.component';
import { ClinicFormComponent }  from './components/clinic-form/clinic-form.component';

@NgModule({
    imports:      [ routing, CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ DashboardComponent, CreateClinicComponent, ClinicFormComponent ],
    bootstrap:    [],
    providers:    [],
})
export class ClinicModule {}