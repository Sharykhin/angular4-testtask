import {Component, Input, OnInit, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Patient} from './../../../../models/patient';
import {ClinicRequestInterface as ClinicRequest} from './../../../../interfaces/request/clinic.request.interface';

@Component({
    selector: 'patient-form',
    templateUrl: '/app/modules/patient/components/patient-form/patient-form.component.html'
})
export class PatientFormComponent implements OnInit, AfterViewInit {

    @Input() patient: Patient;
    @Output() onSubmitted = new EventEmitter<ClinicRequest>();
    @Output() isDirty = new EventEmitter<boolean>();

    patientForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.isDirty.emit(false);
    }

    ngOnInit() {
        this.patientForm = this.formBuilder.group({
            'name': [this.patient.name, Validators.required],
        });
    }

    ngAfterViewInit() {
        //We user ngAfterViewInit lifecycle to prevent initial valueChage trigger
        let subscription = this.patientForm.valueChanges.subscribe(values => {
            this.isDirty.emit(true);
            subscription.unsubscribe();
        });
    }

    onSubmit(value: ClinicRequest): void {
        this.onSubmitted.emit(value);
    }
}
