"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var clinic_routing_1 = require("./clinic.routing");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var create_clinic_component_1 = require("./components/create-clinic/create-clinic.component");
var clinic_form_component_1 = require("./components/clinic-form/clinic-form.component");
var clinic_list_component_1 = require("./components/clinic-list/clinic-list.component");
var clinic_item_component_1 = require("./components/clinic-item/clinic-item.component");
var clinic_profile_component_1 = require("./components/clinic-profile/clinic-profile.component");
var clinic_resolver_1 = require("./resolvers/clinic.resolver");
var ClinicModule = (function () {
    function ClinicModule() {
    }
    return ClinicModule;
}());
ClinicModule = __decorate([
    core_1.NgModule({
        imports: [clinic_routing_1.routing, common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [dashboard_component_1.DashboardComponent, create_clinic_component_1.CreateClinicComponent, clinic_form_component_1.ClinicFormComponent, clinic_list_component_1.ClinicListComponent, clinic_item_component_1.ClinicItemComponent, clinic_profile_component_1.ClinicProfileComponent],
        bootstrap: [],
        providers: [clinic_resolver_1.ClinicResolver],
    })
], ClinicModule);
exports.ClinicModule = ClinicModule;
//# sourceMappingURL=clinic.module.js.map