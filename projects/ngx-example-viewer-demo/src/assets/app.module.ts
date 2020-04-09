import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './components/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxExampleViewerModule } from '@balticcode/ngx-example-viewer';
import { DemoExampleComponent } from './demo-example.component';
import { MatButtonDemoComponent } from './mat-button-demo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    // AppComponent,
    DemoExampleComponent,
    MatButtonDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NgxExampleViewerModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
