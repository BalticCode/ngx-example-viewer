import { Type } from '@angular/core';
import { ExampleFile } from './example-file';

export interface Example {
    title: string;
    component?: Type<any>;
    files: ExampleFile[];
    // TODO v1.1.0
    // withStackblitz?: boolean;
}
