import {Observable} from 'rxjs/Rx';
import {Clinic} from './../../models/clinic';

export interface ApiClinicCrudInterface {

    create(parameters: Object) : Observable<Clinic>;
}
