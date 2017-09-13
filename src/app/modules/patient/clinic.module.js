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
var clinic_routing_1 = require("./clinic.routing");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var ClinicModule = (function () {
    function ClinicModule() {
    }
    return ClinicModule;
}());
ClinicModule = __decorate([
    core_1.NgModule({
        imports: [clinic_routing_1.routing, common_1.CommonModule, forms_1.FormsModule],
        declarations: [dashboard_component_1.DashboardComponent],
        bootstrap: [],
        providers: [],
    })
], ClinicModule);
exports.ClinicModule = ClinicModule;
//# sourceMappingURL=clinic.module.js.map