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
var clinic_factory_1 = require("./../factories/models/clinic.factory");
var ApiClinicCrudService = (function () {
    function ApiClinicCrudService(clinicFactory) {
        this.clinicFactory = clinicFactory;
        this.storageKey = 'clinics';
    }
    ApiClinicCrudService.prototype.create = function (parameters) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var clinic = _this.clinicFactory.createClinic();
            clinic.address = parameters.address;
            clinic.title = parameters.title;
            // TODO: it's better to move it to service since we may want to switch to sessionStorage or cookies.
            var clinics = JSON.parse(localStorage.getItem(_this.storageKey));
            if (clinics === null) {
                localStorage.setItem(_this.storageKey, JSON.stringify([clinic]));
            }
            else {
                clinics.push(clinic);
                localStorage.setItem(_this.storageKey, JSON.stringify(clinics));
            }
            observer.next(clinic);
        });
    };
    //TODO: here is we may want to pass pagination parameters
    ApiClinicCrudService.prototype.list = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var clinics = JSON.parse(localStorage.getItem(_this.storageKey));
            observer.next(clinics || []);
        });
    };
    ApiClinicCrudService.prototype.remove = function (clinic) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var clinics = JSON.parse(localStorage.getItem(_this.storageKey));
            var filteredClinics = clinics.filter(function (item) {
                return item.id !== clinic.id;
            });
            localStorage.setItem(_this.storageKey, JSON.stringify(filteredClinics));
            observer.next(true);
        });
    };
    ApiClinicCrudService.prototype.get = function (id) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            var clinics = JSON.parse(localStorage.getItem(_this.storageKey));
            var clinic = null;
            // Use every to stop iterating as soon as we find item.
            clinics.every(function (item) {
                if (item.id === id) {
                    clinic = item;
                    return false;
                }
                return true;
            });
            if (clinic === null) {
                observer.error({ status: 404 });
            }
            observer.next(clinic);
        });
    };
    return ApiClinicCrudService;
}());
ApiClinicCrudService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [clinic_factory_1.ClinicFactory])
], ApiClinicCrudService);
exports.ApiClinicCrudService = ApiClinicCrudService;
//# sourceMappingURL=api-clinic-crud.service.js.map