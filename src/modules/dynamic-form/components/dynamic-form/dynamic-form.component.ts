import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FromItemConfig } from '../../models/dynamic-form.model';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

    @Input()
    public formConfigs: Array<FromItemConfig> = new Array<FromItemConfig>();

    public formGroup: FormGroup;

    @Output()
    public readonly submitted: EventEmitter<any> = new EventEmitter<any>();

    public constructor(
        private fb: FormBuilder,
    ) {
        this.formGroup = this.fb.group({});
    }

    public ngOnInit(): void {
        this.setFromControl();
    }

    public submitHandler(): void {
        // tslint:disable-next-line: forin
        for (const i in this.formGroup.controls) {
            this.formGroup.controls[i].markAsDirty();
            this.formGroup.controls[i].updateValueAndValidity();
        }
        if (this.formGroup.valid) {
            this.submitted.emit(this.formGroup.value);
        }
    }

    private setFromControl(): void {
        this.formConfigs?.forEach((control, idx) => {

            this.formGroup.addControl(control.controlName,
                this.fb.control(control.defaultValue || null, control?.required ? Validators.required : null));

        });
    }

}
