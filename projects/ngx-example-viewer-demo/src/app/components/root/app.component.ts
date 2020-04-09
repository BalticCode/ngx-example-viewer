import { Component } from '@angular/core';
import { Example } from '@balticcode/ngx-example-viewer';
import { DemoExampleComponent } from '../demo-example/demo-example.component';
import { MatButtonDemoComponent } from '../mat-button-demo/mat-button-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public example: Example = {
    title: 'Simple',
    files: [
      {
        file: 'demo-example.component.html',
        language: 'html',
        content: './assets/demo-example.component.html',
        filecontent: '!!raw-loader!../demo-example/demo-example.component.html'
      },
      {
        file: 'demo-example.component.scss',
        language: 'scss',
        content: './assets/demo-example.component.scss',
        filecontent: '!!raw-loader!../demo-example/demo-example.component.scss'
      },
      {
        file: 'demo-example.component.ts',
        language: 'ts',
        content: './assets/demo-example.component.ts',
        filecontent: '!!raw-loader!../demo-example/demo-example.component.ts'
      },
      {
        file: 'app.module.ts',
        language: 'ts',
        content: './assets/app.module.ts',
        filecontent: '!!raw-loader!../demo-example/demo-example.component.ts'
      },
    ],
    component: DemoExampleComponent
  };

  public matButtons: Example = {
    title: 'Button varieties (from Angular Material docs)',
    files: [
      {
        file: 'mat-button-demo.component.html',
        language: 'html',
        content: './assets/mat-button-demo.component.html',
        filecontent: '!!raw-loader!../demo-example/mat-button-demo.component.html'
      },
      {
        file: 'mat-button-demo.component.scss',
        language: 'scss',
        content: './assets/mat-button-demo.component.scss',
        filecontent: '!!raw-loader!../demo-example/mat-button-demo.component.scss'
      },
      {
        file: 'mat-button-demo.component.ts',
        language: 'ts',
        content: './assets/mat-button-demo.component.ts',
        filecontent: '!!raw-loader!../demo-example/mat-button-demo.component.ts'
      },
    ],
    component: MatButtonDemoComponent
  };
}
