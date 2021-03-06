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
var ClinicProfileComponent = (function () {
    function ClinicProfileComponent(route) {
        this.route = route;
    }
    ClinicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.clinic = data.clinic;
        });
    };
    return ClinicProfileComponent;
}());
ClinicProfileComponent = __decorate([
    core_1.Component({
        selector: 'clinic-profile',
        templateUrl: '/app/modules/clinic/components/clinic-profile/clinic-profile.component.html'
    }),
    __param(0, core_1.Inject(router_1.ActivatedRoute)),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ClinicProfileComponent);
exports.ClinicProfileComponent = ClinicProfileComponent;
//# sourceMappingURL=clinic-profile.component.js.map