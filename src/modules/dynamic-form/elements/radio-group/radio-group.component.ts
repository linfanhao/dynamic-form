import { Component, OnInit } from '@angular/core';
import { FormElementBaseClass } from '../../models/form-element-base.class';

@Component({
    selector: 'app-radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent extends FormElementBaseClass {

    constructor() {
        super();
    }

}
