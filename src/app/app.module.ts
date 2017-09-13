import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

import {ApiClinicCrudService} from './services/api-clinic-crud.service';
import {Utils} from './services/utils';
import {ClinicFactory} from './factories/models/clinic.factory';
import {ConfirmDeactivateGuard} from './guards/confirm-deactivate.guard';


@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders,
    ApiClinicCrudService,
    ClinicFactory,
    Utils,
    ConfirmDeactivateGuard
  ]
})
export class AppModule { }
