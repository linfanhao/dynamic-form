import { Component, OnInit } from '@angular/core';
import { FormElementBaseClass } from '../../models/form-element-base.class';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends FormElementBaseClass {

    constructor() {
        super();
    }

}
