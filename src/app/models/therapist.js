"use strict";
var Therapist = (function () {
    function Therapist() {
    }
    Therapist.prototype.addClinic = function (clinic) {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addTherapist(this);
        }
    };
    Therapist.prototype.addPatient = function (patient) {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addTherapist(this);
        }
    };
    return Therapist;
}());
exports.Therapist = Therapist;
//# sourceMappingURL=therapist.js.map