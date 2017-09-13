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
var forms_1 = require("@angular/forms");
var clinic_1 = require("./../../../../models/clinic");
var ClinicFormComponent = (function () {
    function ClinicFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.onSubmitted = new core_1.EventEmitter();
        this.isDirty = new core_1.EventEmitter();
        this.isDirty.emit(false);
    }
    ClinicFormComponent.prototype.ngOnInit = function () {
        this.clinicForm = this.formBuilder.group({
            'title': [this.clinic.title, forms_1.Validators.required],
            'address': [this.clinic.title, forms_1.Validators.required]
        });
    };
    ClinicFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //We user ngAfterViewInit lifecycle to prevent initial valueChage trigger
        var subscription = this.clinicForm.valueChanges.subscribe(function (values) {
            _this.isDirty.emit(true);
            subscription.unsubscribe();
        });
    };
    ClinicFormComponent.prototype.onSubmit = function (value) {
        this.onSubmitted.emit(value);
    };
    return ClinicFormComponent;
}());
__decorate([
    core_1.Input('clinic'),
    __metadata("design:type", clinic_1.Clinic)
], ClinicFormComponent.prototype, "clinic", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClinicFormComponent.prototype, "onSubmitted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ClinicFormComponent.prototype, "isDirty", void 0);
ClinicFormComponent = __decorate([
    core_1.Component({
        selector: 'clinic-form',
        templateUrl: '/app/modules/clinic/components/clinic-form/clinic-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ClinicFormComponent);
exports.ClinicFormComponent = ClinicFormComponent;
//# sourceMappingURL=clinic-form.component.js.map