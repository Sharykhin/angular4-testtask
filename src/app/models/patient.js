"use strict";
var Patient = (function () {
    function Patient() {
    }
    Patient.prototype.addClinic = function (clinic) {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addPatioen(this);
        }
    };
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map