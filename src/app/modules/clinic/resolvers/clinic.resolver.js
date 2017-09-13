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
var Rx_1 = require("rxjs/Rx");
var api_clinic_crud_service_1 = require("./../../../services/api-clinic-crud.service");
var ClinicResolver = (function () {
    function ClinicResolver(clinicApi, router) {
        this.clinicApi = clinicApi;
        this.router = router;
    }
    ClinicResolver.prototype.resolve = function (route) {
        var _this = this;
        var id = route.params['id'];
        return Rx_1.Observable.create(function (observer) {
            _this.clinicApi.get(id)
                .catch(function (error) {
                return Rx_1.Observable.throw(error);
            })
                .subscribe(function (clinic) { observer.next(clinic); observer.complete(); }, function (error) {
                if (error.status === 404) {
                }
                observer.complete();
            });
        });
    };
    return ClinicResolver;
}());
ClinicResolver = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_clinic_crud_service_1.ApiClinicCrudService)),
    __metadata("design:paramtypes", [Object, router_1.Router])
], ClinicResolver);
exports.ClinicResolver = ClinicResolver;
//# sourceMappingURL=clinic.resolver.js.map