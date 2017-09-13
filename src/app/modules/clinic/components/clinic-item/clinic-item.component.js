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
var clinic_1 = require("./../../../../models/clinic");
var api_clinic_crud_service_1 = require("./../../../../services/api-clinic-crud.service");
var patient_factory_1 = require("./../../../../factories/models/patient.factory");
var ClinicItemComponent = (function () {
    function ClinicItemComponent(clinicApi, patientFactory) {
        this.clinicApi = clinicApi;
        this.patientFactory = patientFactory;
        this.onDeleted = new core_1.EventEmitter();
    }
    ClinicItemComponent.prototype.onDelete = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.clinicApi.remove(this.clinic)
                .subscribe(function (res) {
                if (res === true) {
                    _this.onDeleted.emit(_this.clinic);
                }
            });
        }
    };
    ClinicItemComponent.prototype.addPatient = function () {
        var patient = this.patientFactory.createPatient();
        patient.name = 'John';
        this.clinic.addPatient(patient);
        //patient.addClinic(this.clinic);
        this.clinicApi.save(this.clinic)
            .subscribe(function (res) {
            console.log('patient has been added');
        });
    };
    ClinicItemComponent.prototype.ngOnInit = function () {
        console.log(this.clinic);
    };
    return ClinicItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", clinic_1.Clinic)
], ClinicItemComponent.prototype, "clinic", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClinicItemComponent.prototype, "onDeleted", void 0);
ClinicItemComponent = __decorate([
    core_1.Component({
        selector: 'clinic-item',
        templateUrl: '/app/modules/clinic/components/clinic-item/clinic-item.component.html',
        styleUrls: ['app/modules/clinic/components/clinic-item/clinic-item.component.css']
    }),
    __param(0, core_1.Inject(api_clinic_crud_service_1.ApiClinicCrudService)),
    __param(1, core_1.Inject(patient_factory_1.PatientFactory)),
    __metadata("design:paramtypes", [Object, patient_factory_1.PatientFactory])
], ClinicItemComponent);
exports.ClinicItemComponent = ClinicItemComponent;
//# sourceMappingURL=clinic-item.component.js.map