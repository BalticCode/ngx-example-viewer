import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Example } from '../../interfaces/example';
import { SourceCopierService } from '../../services/source-copier.service';

@Component({
  selector: 'ngxev-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleViewerComponent {

  @Input()
  public example: Example;

  @Input()
  public showSource = false;

  constructor(
    private readonly sourceCopier: SourceCopierService,
    private readonly snackbar: MatSnackBar
  ) { }

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
