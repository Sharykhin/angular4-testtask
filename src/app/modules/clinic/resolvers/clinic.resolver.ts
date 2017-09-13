import { Injectable, Inject } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import {Clinic} from './../../../models/clinic';
import {Observable,Observer} from 'rxjs/Rx';
import {ApiClinicCrudService} from './../../../services/api-clinic-crud.service';
import {ApiClinicCrudInterface} from './../../../interfaces/services/api-clinic-crud.interface';

@Injectable()
export class ClinicResolver implements Resolve<Clinic> {

    constructor(
        @Inject(ApiClinicCrudService) private clinicApi: ApiClinicCrudInterface,
        private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        let id = route.params['id'];
        return Observable.create((observer: Observer<any>) => {
            this.clinicApi.get(id)
                .catch(error => {
                    return Observable.throw(error);
                })
                .subscribe(
                    (clinic: Clinic) => { observer.next(clinic); observer.complete(); },
                    (error) => {
                        if (error.status === 404) {
                            //TOD: By some reasons it doesn't work as expeced.
                            //this.router.navigate(['/**']);
                        }
                        observer.complete();
                    }
                );
        });
    }
}
