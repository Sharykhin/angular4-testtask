"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var clinic_1 = require("./../../models/clinic");
var ClinicFactory = (function () {
    function ClinicFactory() {
    }
    ClinicFactory.prototype.createClinic = function () {
        return new clinic_1.Clinic();
    };
    return ClinicFactory;
}());
ClinicFactory = __decorate([
    core_1.Injectable()
], ClinicFactory);
exports.ClinicFactory = ClinicFactory;
//# sourceMappingURL=clinic.factory.js.map