"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var api_patient_crud_service_1 = require("./../../../../services/api-patient-crud.service");
var patient_factory_1 = require("./../../../../factories/models/patient.factory");
var CreatePatientComponent = (function () {
    function CreatePatientComponent(patientApi, router, patientFactory) {
        this.patientApi = patientApi;
        this.router = router;
        this.patientFactory = patientFactory;
        this.formDirty = false;
    }
    CreatePatientComponent.prototype.onCreate = function (patient) {
        var _this = this;
        this.patientApi.create(patient)
            .subscribe(function (newPatient) {
            _this.formDirty = false;
            _this.router.navigate(['/patients']);
        });
    };
    CreatePatientComponent.prototype.isFormDirty = function (value) {
        this.formDirty = value;
    };
    CreatePatientComponent.prototype.canDeactivate = function () {
        return this.formDirty ? window.confirm('Do you really want to cancel your changes?') : true;
    };
    CreatePatientComponent.prototype.ngOnInit = function () {
        this.patient = this.patientFactory.createPatient();
    };
    return CreatePatientComponent;
}());
CreatePatientComponent = __decorate([
    core_1.Component({
        selector: 'patient-create-patient',
        templateUrl: '/app/modules/patient/components/create-patient/create-patient.component.html'
    }),
    __param(0, core_1.Inject(api_patient_crud_service_1.ApiPatientCrudService)),
    __param(1, core_1.Inject(router_1.Router)),
    __param(2, core_1.Inject(patient_factory_1.PatientFactory)),
    __metadata("design:paramtypes", [Object, router_1.Router,
        patient_factory_1.PatientFactory])
], CreatePatientComponent);
exports.CreatePatientComponent = CreatePatientComponent;
//# sourceMappingURL=create-patient.component.js.map