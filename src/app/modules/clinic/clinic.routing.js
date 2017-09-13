"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var create_clinic_component_1 = require("./components/create-clinic/create-clinic.component");
var confirm_deactivate_guard_1 = require("./../../guards/confirm-deactivate.guard");
var clinic_list_component_1 = require("./components/clinic-list/clinic-list.component");
var clinic_profile_component_1 = require("./components/clinic-profile/clinic-profile.component");
var clinic_resolver_1 = require("./resolvers/clinic.resolver");
var aboutRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: '',
                component: clinic_list_component_1.ClinicListComponent
            },
            {
                path: 'new',
                component: create_clinic_component_1.CreateClinicComponent,
                canDeactivate: [confirm_deactivate_guard_1.ConfirmDeactivateGuard]
            },
            {
                path: ':id',
                component: clinic_profile_component_1.ClinicProfileComponent,
                resolve: {
                    clinic: clinic_resolver_1.ClinicResolver
                }
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=clinic.routing.js.map