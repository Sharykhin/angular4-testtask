"use strict";
var Therapist = (function () {
    function Therapist() {
    }
    Therapist.prototype.addClinic = function (clinic) {
        var profile = clinic.getProfile();
        this.clinics.push(profile);
    };
    Therapist.prototype.addPatient = function (patient) {
        var profile = patient.getProfile();
        this.patients.push(profile);
    };
    Therapist.prototype.getProfile = function () {
        return {
            id: this.id,
            position: this.position
        };
    };
    return Therapist;
}());
exports.Therapist = Therapist;
//# sourceMappingURL=therapist.js.map