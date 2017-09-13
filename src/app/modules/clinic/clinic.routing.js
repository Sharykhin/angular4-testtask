"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var create_clinic_component_1 = require("./components/create-clinic/create-clinic.component");
var confirm_deactivate_guard_1 = require("./../../guards/confirm-deactivate.guard");
var aboutRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: 'new',
                component: create_clinic_component_1.CreateClinicComponent,
                canDeactivate: [confirm_deactivate_guard_1.ConfirmDeactivateGuard]
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=clinic.routing.js.map