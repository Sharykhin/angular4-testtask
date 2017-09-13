"use strict";
var Clinic = (function () {
    function Clinic() {
    }
    Clinic.prototype.addPatient = function (patient) {
        var profile = patient.getProfile();
        this.patients.push(profile);
        patient.addClinic(this);
    };
    Clinic.prototype.addTherapist = function (therapist) {
        if (this.therapists.indexOf(therapist) === -1) {
            this.therapists.push(therapist);
        }
    };
    Clinic.prototype.getProfile = function () {
        return {
            id: this.id,
            title: this.title,
            address: this.address
        };
    };
    return Clinic;
}());
exports.Clinic = Clinic;
//# sourceMappingURL=clinic.js.map