export interface FromItemConfig<T = any> {
    type: FromItemType;
    controlName: string;
    label: string;
    defaultValue?: T;
    disabled?: boolean;
    required?: boolean;
    options?: Array<OptionItem>;

}
export interface OptionItem {
    value: any;
    label: string;
}
export enum FromItemType {
    'checkbox' = 'checkbox',
    'input' = 'input',
    'number' = 'number',
    'textarea' = 'textarea',
    'radio' = 'radio',
}
