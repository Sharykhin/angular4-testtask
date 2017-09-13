import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { CreateClinicComponent }  from './components/create-clinic/create-clinic.component';
import { ConfirmDeactivateGuard }    from './../../guards/confirm-deactivate.guard';
import { ClinicListComponent }  from './components/clinic-list/clinic-list.component';
import { ClinicProfileComponent }  from './components/clinic-profile/clinic-profile.component';
import { ClinicResolver } from './resolvers/clinic.resolver';

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
            },
            {
                path: ':id',
                component: ClinicProfileComponent,
                resolve: {
                    clinic: ClinicResolver
                }
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(aboutRoutes);