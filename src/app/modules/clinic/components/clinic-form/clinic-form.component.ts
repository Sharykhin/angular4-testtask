import {Component, Input, OnInit, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Clinic} from './../../../../models/clinic';
import {ClinicRequestInterface as ClinicRequest} from './../../../../interfaces/request/clinic.request.interface';

@Component({
    selector: 'clinic-form',
    templateUrl: '/app/modules/clinic/components/clinic-form/clinic-form.component.html'
})
export class ClinicFormComponent implements OnInit, AfterViewInit {

    @Input('clinic') clinic: Clinic;
    @Output() onSubmitted = new EventEmitter<ClinicRequest>();
    @Output() isDirty = new EventEmitter<boolean>();

    clinicForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.isDirty.emit(false);
    }

    ngOnInit() {
        this.clinicForm = this.formBuilder.group({
            'title': [this.clinic.title, Validators.required],
            'address': [this.clinic.title, Validators.required]
        });
    }

    ngAfterViewInit() {
        //We user ngAfterViewInit lifecycle to prevent initial valueChage trigger
        let subscription = this.clinicForm.valueChanges.subscribe(values => {
            this.isDirty.emit(true);
            subscription.unsubscribe();
        });
    }

    onSubmit(value: ClinicRequest): void {
        this.onSubmitted.emit(value);
    }
}
