"use strict";
var Clinic = (function () {
    function Clinic() {
    }
    Clinic.prototype.addPatioen = function (patient) {
        if (this.patients.indexOf(patient) === -1) {
            this.patients.push(patient);
            patient.addClinic(this);
        }
    };
    return Clinic;
}());
exports.Clinic = Clinic;
//# sourceMappingURL=clinic.js.map