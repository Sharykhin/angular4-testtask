import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent }  from './components/dashboard/dashboard.component';

const aboutRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(aboutRoutes);