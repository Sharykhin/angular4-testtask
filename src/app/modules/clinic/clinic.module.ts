import { NgModule }  from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { routing } from './clinic.routing';
import { DashboardComponent }  from './components/dashboard/dashboard.component';

@NgModule({
    imports:      [ routing, CommonModule, FormsModule ],
    declarations: [ DashboardComponent ],
    bootstrap:    [],
    providers:    [],
})
export class ClinicModule {}