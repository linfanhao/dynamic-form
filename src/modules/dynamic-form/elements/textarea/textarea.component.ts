import { Component, OnInit } from '@angular/core';
import { FormElementBaseClass } from '../../models/form-element-base.class';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends FormElementBaseClass {

    constructor() {
        super();
    }

}
