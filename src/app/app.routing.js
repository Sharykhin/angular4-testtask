"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'clinics',
        loadChildren: '/app/modules/clinic/clinic.module#ClinicModule'
    },
    // {
    //     path: 'patients',
    //     loadChildren: '/app/modules/auth/auth.module#AuthModule'
    // },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map