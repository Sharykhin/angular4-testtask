"use strict";
var Patient = (function () {
    function Patient() {
    }
    Patient.prototype.addClinic = function (clinic) {
        if (this.clinics.indexOf(clinic) === -1) {
            this.clinics.push(clinic);
            clinic.addPatient(this);
        }
    };
    Patient.prototype.addTherapist = function (therapist) {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
            therapist.addPatient(this);
        }
    };
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map