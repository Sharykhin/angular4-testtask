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
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var patient_factory_1 = require("./../factories/models/patient.factory");
var ApiPatientCrudService = (function () {
    function ApiPatientCrudService(patientFactory) {
        this.patientFactory = patientFactory;
        this.storageKey = 'patients';
    }
    ApiPatientCrudService.prototype.create = function (parameters) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var patient = _this.patientFactory.createPatient(parameters);
            // TODO: it's better to move it to service since we may want to switch to sessionStorage or cookies.
            var patients = JSON.parse(localStorage.getItem(_this.storageKey));
            if (patients === null) {
                localStorage.setItem(_this.storageKey, JSON.stringify([patient]));
            }
            else {
                patients.push(patient);
                localStorage.setItem(_this.storageKey, JSON.stringify(patients));
            }
            observer.next(patient);
        });
    };
    ApiPatientCrudService.prototype.save = function (patient) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var patients = JSON.parse(localStorage.getItem(_this.storageKey)) || [];
            // Use every to stop iterating as soon as we find item.
            var filteredPatients = patients.filter(function (item) {
                return item.id !== patient.id;
            });
            filteredPatients.push(patient);
            console.log('save patient');
            localStorage.setItem(_this.storageKey, JSON.stringify(filteredPatients));
            observer.next(true);
        });
    };
    return ApiPatientCrudService;
}());
ApiPatientCrudService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [patient_factory_1.PatientFactory])
], ApiPatientCrudService);
exports.ApiPatientCrudService = ApiPatientCrudService;
//# sourceMappingURL=api-patient-crud.service.js.map