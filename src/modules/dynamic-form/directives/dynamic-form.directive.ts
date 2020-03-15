import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NumberComponent } from '../elements/number/number.component';
import { RadioGroupComponent } from '../elements/radio-group/radio-group.component';
import { FromItemConfig } from '../models/dynamic-form.model';
import { CheckboxComponent } from './../elements/checkbox/checkbox.component';
import { InputComponent } from './../elements/input/input.component';
import { TextareaComponent } from './../elements/textarea/textarea.component';

const elementComponent: { [key: string]: any } = {
    checkbox: CheckboxComponent,
    input: InputComponent,
    textarea: TextareaComponent,
    radio: RadioGroupComponent,
    number: NumberComponent,
};

@Directive({
    selector: '[appDynamicForm]'
})
export class DynamicFormDirective implements OnInit {

    @Input()
    public formConfig: FromItemConfig;

    @Input()
    public formGroup: FormGroup;

    private component: ComponentRef<any>;

    public constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        // ComponentFactoryResolver && ViewContainerRef
    ) { }

    public ngOnInit(): void {
        this.viewContainerRef.clear();
        if (!this.formConfig) {
            return;
        }
        const component: any = elementComponent[this.formConfig.type];

        if (!component) {
            return;
        }

        const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.formConfig = this.formConfig;
        componentRef.instance.formGroup = this.formGroup;
    }

}
