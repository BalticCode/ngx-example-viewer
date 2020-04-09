import { ExampleFile } from './example-file';

export interface Example {
    title: string;
    component: any;
    files: ExampleFile[];
    // TODO v1.1.0
    // withStackblitz?: boolean;
}
