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
var patient_1 = require("./../../../../models/patient");
var PatientFormComponent = (function () {
    function PatientFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.onSubmitted = new core_1.EventEmitter();
        this.isDirty = new core_1.EventEmitter();
        this.isDirty.emit(false);
    }
    PatientFormComponent.prototype.ngOnInit = function () {
        this.patientForm = this.formBuilder.group({
            'name': [this.patient.name, forms_1.Validators.required],
        });
    };
    PatientFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //We user ngAfterViewInit lifecycle to prevent initial valueChage trigger
        var subscription = this.patientForm.valueChanges.subscribe(function (values) {
            _this.isDirty.emit(true);
            subscription.unsubscribe();
        });
    };
    PatientFormComponent.prototype.onSubmit = function (value) {
        this.onSubmitted.emit(value);
    };
    return PatientFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", patient_1.Patient)
], PatientFormComponent.prototype, "patient", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PatientFormComponent.prototype, "onSubmitted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PatientFormComponent.prototype, "isDirty", void 0);
PatientFormComponent = __decorate([
    core_1.Component({
        selector: 'patient-form',
        templateUrl: '/app/modules/patient/components/patient-form/patient-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], PatientFormComponent);
exports.PatientFormComponent = PatientFormComponent;
//# sourceMappingURL=patient-form.component.js.map