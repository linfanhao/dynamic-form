import { Component, OnInit } from '@angular/core';
import { FormElementBaseClass } from '../../models/form-element-base.class';

@Component({
    selector: 'app-number',
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.scss']
})
export class NumberComponent extends FormElementBaseClass {

    constructor() {
        super();
    }

}
