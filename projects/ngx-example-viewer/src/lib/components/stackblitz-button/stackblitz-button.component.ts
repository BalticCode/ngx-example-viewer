import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Example } from '../../interfaces/example';
import { StackblitzService } from '../../services/stackblitz.service';

@Component({
  selector: 'ngxev-stackblitz-button',
  templateUrl: './stackblitz-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackblitzButtonComponent {

  private stackblitzForm: HTMLFormElement;

  @Input()
  public set example(example: Example) {
    this.stackblitzForm = this.stackblitzService.constructStackblitzForm(example);
  }

  constructor(
    private readonly stackblitzService: StackblitzService
  ) { }

  public openStackblitz(): void {
    // When the form is submitted, it must be in the document body. The standard of forms is not
    // to submit if it is detached from the document. See the following chromium commit for
    // more details:
    // https://chromium.googlesource.com/chromium/src/+/962c2a22ddc474255c776aefc7abeba00edc7470%5E!
    document.body.appendChild(this.stackblitzForm);
    this.stackblitzForm.submit();
    document.body.removeChild(this.stackblitzForm);
  }
}
