import { Component } from '@angular/core';
import { Example } from '@balticcode/ngx-example-viewer';
import { MatButtonDemoComponent } from '../../docs/mat-button-demo/mat-button-demo.component';
import { GettingStartedComponent } from '../../docs/getting-started/getting-started.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public gettingStarted: Example = {
    title: 'Getting started',
    files: [
      {
        title: 'getting-started.module.ts',
        language: 'ts',
        filePath: './assets/docs/getting-started/getting-started.module.ts'
      },
      {
        title: 'getting-started.component.html',
        language: 'html',
        filePath: './assets/docs/getting-started/getting-started.component.html'
      },
      {
        title: 'getting-started.component.scss',
        language: 'scss',
        filePath: './assets/docs/getting-started/getting-started.component.scss'
      },
      {
        title: 'getting-started.component.ts',
        language: 'ts',
        filePath: './assets/docs/getting-started/getting-started.component.ts'
      }
    ],
    component: GettingStartedComponent
  };

  public materialTheme: Example = {
    title: 'Material theme',
    files: [
      {
        title: 'styles.scss (on app level)',
        language: 'scss',
        filePath: './assets/docs/material-theme/styles.scss'
      }
    ]
  };

  public codeTheme: Example = {
    title: 'Code theme',
    files: [
      {
        title: 'styles.scss (on app level)',
        language: 'scss',
        filePath: './assets/docs/code-theme/styles.scss'
      }
    ]
  };

  public matButtons: Example = {
    title: 'Button varieties (from Angular Material docs)',
    files: [
      {
        title: 'mat-button-demo.component.html',
        language: 'html',
        filePath: './assets/docs/mat-button-demo/mat-button-demo.component.html'
      },
      {
        title: 'mat-button-demo.component.scss',
        language: 'scss',
        filePath: './assets/docs/mat-button-demo/mat-button-demo.component.scss'
      },
      {
        title: 'mat-button-demo.component.ts',
        language: 'ts',
        filePath: './assets/docs/mat-button-demo/mat-button-demo.component.ts'
      },
    ],
    component: MatButtonDemoComponent
  };
}
