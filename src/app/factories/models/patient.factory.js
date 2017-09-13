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
var patient_1 = require("./../../models/patient");
var utils_1 = require("./../../services/utils");
var PatientFactory = (function () {
    function PatientFactory(utils) {
        this.utils = utils;
    }
    PatientFactory.prototype.createPatient = function () {
        var patient = new patient_1.Patient();
        patient.id = this.utils.uuid();
        patient.clinics = [];
        patient.therapists = [];
        return patient;
    };
    return PatientFactory;
}());
PatientFactory = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(utils_1.Utils)),
    __metadata("design:paramtypes", [utils_1.Utils])
], PatientFactory);
exports.PatientFactory = PatientFactory;
//# sourceMappingURL=patient.factory.js.map