import { NgModule }  from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { routing } from './patient.routing';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { CreatePatientComponent }  from './components/create-patient/create-patient.component';
import { PatientFormComponent }  from './components/patient-form/patient-form.component';

@NgModule({
    imports:      [ routing, CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ DashboardComponent, PatientFormComponent, CreatePatientComponent ],
    bootstrap:    [],
    providers:    [],
})
export class PatientModule {}