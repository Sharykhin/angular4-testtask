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
var api_clinic_crud_service_1 = require("./../../../../services/api-clinic-crud.service");
var ClinicListComponent = (function () {
    function ClinicListComponent(clinicApi) {
        this.clinicApi = clinicApi;
    }
    ClinicListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clinicApi.list()
            .subscribe(function (clinics) {
            _this.clinics = clinics;
        });
    };
    ClinicListComponent.prototype.onDelete = function (clinic) {
        this.clinics.splice(this.clinics.indexOf(clinic), 1);
    };
    return ClinicListComponent;
}());
ClinicListComponent = __decorate([
    core_1.Component({
        selector: 'clinic-list',
        templateUrl: '/app/modules/clinic/components/clinic-list/clinic-list.component.html'
    }),
    __param(0, core_1.Inject(api_clinic_crud_service_1.ApiClinicCrudService)),
    __metadata("design:paramtypes", [Object])
], ClinicListComponent);
exports.ClinicListComponent = ClinicListComponent;
//# sourceMappingURL=clinic-list.component.js.map