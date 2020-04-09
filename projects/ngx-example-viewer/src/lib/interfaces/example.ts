import { ExampleFile } from './example-file';

export interface Example {
    title: string;
    component: any;
    files: ExampleFile[];
}
