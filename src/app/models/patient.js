"use strict";
var Patient = (function () {
    function Patient() {
    }
    Patient.prototype.addClinic = function (clinic) {
        var profile = clinic.getProfile();
        this.clinics.push(profile);
    };
    Patient.prototype.addTherapist = function (therapist) {
        var profile = therapist.getProfile();
        this.therapists.push(therapist);
    };
    Patient.prototype.getProfile = function () {
        return {
            id: this.id,
            name: this.name
        };
    };
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map