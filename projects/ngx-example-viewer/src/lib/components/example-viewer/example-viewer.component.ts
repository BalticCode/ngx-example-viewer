import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Example } from '../../interfaces/example';
import { SourceCopierService } from '../../services/source-copier.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ngxev-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleViewerComponent implements OnInit, OnDestroy {

  @Input()
  public example: Example;

  @ViewChild('demo', { read: ViewContainerRef, static: true })
  public demoRef: ViewContainerRef;

  private demoComponentRef: ComponentRef<any>;

  /** Whether the source for the example is being displayed. */
  public showSource = false;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly sourceCopier: SourceCopierService,
    private readonly snackbar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    if (this.example?.component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.example.component);
      this.demoComponentRef = this.demoRef.createComponent(componentFactory);
    }
  }

  public ngOnDestroy(): void {
    if (this.demoComponentRef) {
      this.demoComponentRef.destroy();
    }
  }

  public toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  public copySource(content: HTMLPreElement): void {
    if (this.sourceCopier.copyText(content.innerText)) {
      this.snackbar.open('Code copied', '', { duration: 2500 });
    } else {
      this.snackbar.open('Copy failed. Please try again!', '', { duration: 2500 });
    }
  }
}
