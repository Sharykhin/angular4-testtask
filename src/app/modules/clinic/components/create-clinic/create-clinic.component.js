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
var api_clinic_crud_service_1 = require("./../../../../services/api-clinic-crud.service");
var clinic_factory_1 = require("./../../../../factories/models/clinic.factory");
var CreateClinicComponent = (function () {
    function CreateClinicComponent(clinicApi, router, clinicFactory) {
        this.clinicApi = clinicApi;
        this.router = router;
        this.clinicFactory = clinicFactory;
        this.formDirty = false;
    }
    CreateClinicComponent.prototype.onCreate = function (clinic) {
        var _this = this;
        this.clinicApi.create(clinic)
            .subscribe(function (newClinic) {
            _this.formDirty = false;
            _this.router.navigate(['/clinics']);
        });
    };
    CreateClinicComponent.prototype.isFormDirty = function (value) {
        this.formDirty = value;
    };
    CreateClinicComponent.prototype.canDeactivate = function () {
        return this.formDirty ? window.confirm('Do you really want to cancel your changes?') : true;
    };
    CreateClinicComponent.prototype.ngOnInit = function () {
        this.clinic = this.clinicFactory.createClinic();
    };
    return CreateClinicComponent;
}());
CreateClinicComponent = __decorate([
    core_1.Component({
        selector: 'clinic-create-clinic',
        templateUrl: '/app/modules/clinic/components/create-clinic/create-clinic.component.html'
    }),
    __param(0, core_1.Inject(api_clinic_crud_service_1.ApiClinicCrudService)),
    __param(1, core_1.Inject(router_1.Router)),
    __param(2, core_1.Inject(clinic_factory_1.ClinicFactory)),
    __metadata("design:paramtypes", [Object, router_1.Router,
        clinic_factory_1.ClinicFactory])
], CreateClinicComponent);
exports.CreateClinicComponent = CreateClinicComponent;
//# sourceMappingURL=create-clinic.component.js.map