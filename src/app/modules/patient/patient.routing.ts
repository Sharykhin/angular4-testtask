import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { ConfirmDeactivateGuard }    from './../../guards/confirm-deactivate.guard';
import { CreatePatientComponent }  from './components/create-patient/create-patient.component';

const aboutRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'new',
                component: CreatePatientComponent,
                canDeactivate: [ ConfirmDeactivateGuard ]
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
