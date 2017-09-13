import {Observable} from 'rxjs/Rx';
import {Clinic} from './../../models/clinic';

export interface ApiClinicCrudInterface {

    create(parameters: Object) : Observable<Clinic>;

    list(): Observable<Clinic[]>;

    remove(clinic: Clinic): Observable<boolean>;

    get(id: string) : Observable<Clinic>;

    save(clinic: Clinic): Observable<boolean>;
}
