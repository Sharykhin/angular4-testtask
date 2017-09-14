"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var patient_routing_1 = require("./patient.routing");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var create_patient_component_1 = require("./components/create-patient/create-patient.component");
var patient_form_component_1 = require("./components/patient-form/patient-form.component");
var PatientModule = (function () {
    function PatientModule() {
    }
    return PatientModule;
}());
PatientModule = __decorate([
    core_1.NgModule({
        imports: [patient_routing_1.routing, common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [dashboard_component_1.DashboardComponent, patient_form_component_1.PatientFormComponent, create_patient_component_1.CreatePatientComponent],
        bootstrap: [],
        providers: [],
    })
], PatientModule);
exports.PatientModule = PatientModule;
//# sourceMappingURL=patient.module.js.map