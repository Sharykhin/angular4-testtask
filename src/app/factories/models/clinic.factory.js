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
var clinic_1 = require("./../../models/clinic");
var utils_1 = require("./../../services/utils");
var ClinicFactory = (function () {
    function ClinicFactory(utils) {
        this.utils = utils;
    }
    // TODO: think about using any, it may be better to add optionals fields to ClinicRequest?
    ClinicFactory.prototype.createClinic = function (parameters) {
        parameters = parameters || {};
        var clinic = new clinic_1.Clinic();
        clinic.id = parameters.id || this.utils.uuid();
        clinic.title = parameters.title || null;
        clinic.address = parameters.address || null;
        clinic.patients = parameters.patients || [];
        clinic.therapists = parameters.therapists || [];
        return clinic;
    };
    return ClinicFactory;
}());
ClinicFactory = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(utils_1.Utils)),
    __metadata("design:paramtypes", [utils_1.Utils])
], ClinicFactory);
exports.ClinicFactory = ClinicFactory;
//# sourceMappingURL=clinic.factory.js.map