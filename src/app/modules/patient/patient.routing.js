"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var confirm_deactivate_guard_1 = require("./../../guards/confirm-deactivate.guard");
var create_patient_component_1 = require("./components/create-patient/create-patient.component");
var aboutRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: 'new',
                component: create_patient_component_1.CreatePatientComponent,
                canDeactivate: [confirm_deactivate_guard_1.ConfirmDeactivateGuard]
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=patient.routing.js.map