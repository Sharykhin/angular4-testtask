import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'clinics',
        loadChildren: '/app/modules/clinic/clinic.module#ClinicModule'
    },
    {
        path: 'patients',
        loadChildren: '/app/modules/patient/patient.module#PatientModule'
    },
    {
        path: 'therapists',
        loadChildren: '/app/modules/therapist/therapist.module#TherapistModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
