import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ExampleViewerComponent } from './components/example-viewer/example-viewer.component';
import { StackblitzButtonComponent } from './components/stackblitz-button/stackblitz-button.component';
import { HighlightLoaderPipe } from './pipes/highlight-loader.pipe';

@NgModule({
  declarations: [
    ExampleViewerComponent,
    StackblitzButtonComponent,
    HighlightLoaderPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule
  ],
  exports: [
    ExampleViewerComponent
  ]
})
export class ExampleViewerModule { }
