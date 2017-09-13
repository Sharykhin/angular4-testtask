"use strict";
var Clinic = (function () {
    function Clinic() {
    }
    Clinic.prototype.addPatient = function (patient) {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addClinic(this);
        }
    };
    Clinic.prototype.addTherapist = function (therapist) {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
            therapist.addClinic(this);
        }
    };
    return Clinic;
}());
exports.Clinic = Clinic;
//# sourceMappingURL=clinic.js.map