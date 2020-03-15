import { Component, OnInit } from '@angular/core';
import { FromItemConfig, FromItemType } from 'src/modules/dynamic-form/models/dynamic-form.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public formConfigs: Array<FromItemConfig> = new Array<FromItemConfig>();
    public data: any;

    public ngOnInit(): void {
        this.formConfigs = [
            {
                type: FromItemType.input,
                controlName: 'name',
                label: '姓名',
                required: true
            },
            {
                type: FromItemType.radio,
                controlName: 'sex',
                label: '性别',
                defaultValue: 'man',
                options: [{ label: '男', value: 'man' }, { label: '女', value: 'woman' }, { label: '未知', value: 'unknown' }]
            },
            {
                type: FromItemType.input,
                controlName: 'nationality',
                label: '民族',
                defaultValue: '汉'
            },
            {
                type: FromItemType.number,
                controlName: 'age',
                label: '年龄',
            },
            {
                type: FromItemType.input,
                controlName: 'number',
                label: '学号',
            },
            {
                type: FromItemType.input,
                controlName: 'class',
                label: '班级',
            },
            {
                type: FromItemType.textarea,
                controlName: 'class',
                label: '爱好',
            },
            {
                type: FromItemType.checkbox,
                controlName: 'reConfirm',
                label: '已确认',
                required: true
            }
        ];
    }

    public submitHandler(formGroupValue: any): void {
        // TODO:
        this.data = formGroupValue;
    }
}
