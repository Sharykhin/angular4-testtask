import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { CreateClinicComponent }  from './components/create-clinic/create-clinic.component';
import { ConfirmDeactivateGuard }    from './../../guards/confirm-deactivate.guard';
import { ClinicListComponent }  from './components/clinic-list/clinic-list.component';

const aboutRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: ClinicListComponent },
            {
                path: 'new',
                component: CreateClinicComponent,
                canDeactivate: [ ConfirmDeactivateGuard ]
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(aboutRoutes);