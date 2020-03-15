import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormDirective } from './directives/dynamic-form.directive';
import { ELEMENT_COMPONENTS } from './elements';

@NgModule({
    declarations: [
        DynamicFormComponent,
        DynamicFormDirective,
        ...ELEMENT_COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    entryComponents: [
        ...ELEMENT_COMPONENTS
    ],
    exports: [
        DynamicFormComponent
    ]
})

export class DynamicFormModule { }
