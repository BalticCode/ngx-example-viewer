import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './getting-started.component';
import { ExampleViewerModule } from '@balticcode/ngx-example-viewer';

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [
    CommonModule,

    ExampleViewerModule
  ]
})
export class GettingStartedModule { }
