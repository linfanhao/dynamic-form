import { FormGroup } from '@angular/forms';
import { FromItemConfig } from './dynamic-form.model';

export class FormElementBaseClass {
    public formConfig: FromItemConfig;

    public formGroup: FormGroup;

    public get formControl(): { [key: string]: any } {
        return this.formGroup.controls;
    }
}
