"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./components/app/app.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var home_component_1 = require("./components/home/home.component");
var api_clinic_crud_service_1 = require("./services/api-clinic-crud.service");
var utils_1 = require("./services/utils");
var clinic_factory_1 = require("./factories/models/clinic.factory");
var patient_factory_1 = require("./factories/models/patient.factory");
var confirm_deactivate_guard_1 = require("./guards/confirm-deactivate.guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, not_found_component_1.NotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            app_routing_1.appRoutingProviders,
            api_clinic_crud_service_1.ApiClinicCrudService,
            clinic_factory_1.ClinicFactory,
            patient_factory_1.PatientFactory,
            utils_1.Utils,
            confirm_deactivate_guard_1.ConfirmDeactivateGuard
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map