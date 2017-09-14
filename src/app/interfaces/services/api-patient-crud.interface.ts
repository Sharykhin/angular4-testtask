import { Observable } from 'rxjs/Rx';
import { Patient } from './../../models/patient';
import { PatientRequestInterface } from './../../interfaces/request/patient.request.interface';

export interface ApiPatientCrudInterface {

    create(parameters: PatientRequestInterface) : Observable<Patient>;

    save(patient: Patient) : Observable<boolean>;
}
