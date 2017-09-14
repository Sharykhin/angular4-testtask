import {Observable} from 'rxjs/Rx';
import {Patient} from './../../models/patient';

export interface ApiPatientCrudInterface {

    save(patient: Patient) : Observable<boolean>;
}
