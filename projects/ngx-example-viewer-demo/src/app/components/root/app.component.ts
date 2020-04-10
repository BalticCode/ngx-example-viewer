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
        title: 'demo-example.component.html',
        language: 'html',
        filePath: './assets/demo-example.component.html'
      },
      {
        title: 'demo-example.component.scss',
        language: 'scss',
        filePath: './assets/demo-example.component.scss'
      },
      {
        title: 'demo-example.component.ts',
        language: 'ts',
        filePath: './assets/demo-example.component.ts'
      },
      {
        title: 'app.module.ts',
        language: 'ts',
        filePath: './assets/app.module.ts'
      },
    ],
    component: DemoExampleComponent
  };

  public matButtons: Example = {
    title: 'Button varieties (from Angular Material docs)',
    files: [
      {
        title: 'mat-button-demo.component.html',
        language: 'html',
        filePath: './assets/mat-button-demo.component.html'
      },
      {
        title: 'mat-button-demo.component.scss',
        language: 'scss',
        filePath: './assets/mat-button-demo.component.scss'
      },
      {
        title: 'mat-button-demo.component.ts',
        language: 'ts',
        filePath: './assets/mat-button-demo.component.ts'
      },
    ],
    component: MatButtonDemoComponent
  };
}
