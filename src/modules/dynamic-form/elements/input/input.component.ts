import { Component, OnInit } from '@angular/core';
import { FormElementBaseClass } from '../../models/form-element-base.class';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent extends FormElementBaseClass {

    public constructor() {
        super();
    }

}
