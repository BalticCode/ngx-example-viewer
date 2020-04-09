import { Injectable } from '@angular/core';
import { Example } from '../interfaces/example';
import { ExampleFile } from '../interfaces/example-file';

const STACKBLITZ_URL = 'https://run.stackblitz.com/api/angular/v1';

const COPYRIGHT =
  `Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license`;

const TAGS: string[] = ['angular', 'ngx-example-viewer', 'example'];

const angularVersion = '^9.0.0';
const materialVersion = '^9.0.0';
const ngxExampleViewerVersion = '^1.0.0';

const dependencies = {
  core: {
    '@angular/common': angularVersion,
    '@angular/compiler': angularVersion,
    '@angular/core': angularVersion,
    '@angular/forms': angularVersion,
    '@angular/platform-browser': angularVersion,
    '@angular/platform-browser-dynamic': angularVersion,
    // 'core-js': '^2.4.1',
    'rxjs': '^6.5.0',
    // 'zone.js': '^0.9.0',
    'tslib': '^1.10.0',

    '@balticcode/ngx-example-viewer': ngxExampleViewerVersion,
  }
};

@Injectable({
  providedIn: 'root'
})
export class StackblitzService {

  /**
   * Stackblitz writer, write example files to stackblitz
   *
   * StackBlitz API
   * URL: https://run.stackblitz.com/api/aio/v1/
   * data: {
   *   // File name, directory and content of files
   *   files[file-name1]: file-content1,
   *   files[directory-name/file-name2]: file-content2,
   *   // Can add multiple tags
   *   tags[0]: tag-0,
   *   // Description of stackblitz
   *   description: description,
   *   // Private or not
   *   private: true
   *  // Dependencies
   *  dependencies: dependencies
   * }
   */
  public constructStackblitzForm(example: Example): HTMLFormElement {

    const form = this.createFormElement();

    // add stackblitz tags
    TAGS.forEach((tag: string, i: number) => this.appendFormInput(form, `tags[${i}]`, tag));

    this.appendFormInput(form, 'private', 'true');
    this.appendFormInput(form, 'description', example.title);

    // add AppModule
    // const appModuleContent = example.files.find((f: ExampleFile) => f.file === 'app.module.ts')?.filecontent ?? '';

    // construct options
    const options: any = {};

    // if (appModuleContent.indexOf('@angular/material') !== -1) {
    //   options.includeMaterial = true;
    //   options.useAnimation = true;
    // }

    // if (!options.useAnimation
    //   && example.files.map((f: ExampleFile) => f.filecontent).some(content => content.indexOf('@angular/animations') !== -1)) {
    //   options.useAnimation = true;
    // }

    const deps = {
      ...dependencies.core
    };

    if (options.useAnimation) {
      deps['@angular/animations'] = angularVersion;
    }

    if (options.includeMaterial) {
      deps['@angular/cdk'] = materialVersion;
      deps['@angular/material'] = materialVersion;
    }

    // add dependencies
    this.appendFormInput(form, 'dependencies', JSON.stringify(deps));

    // [
    //   ...TEMPLATE_FILES.core,
    //   ...TEMPLATE_FILES[options.type],
    // ]
    //   .forEach(data => {
    //     this._addFileToForm(
    //       form,
    //       this._replaceExamplePlaceholderNames(data.file, data.filecontent, options),
    //       data.file,
    //       false,
    //     );
    //   });

    // example.files.forEach(data => {
    //   this.addFileToForm(
    //     form,
    //     // this._replaceExamplePlaceholderNames(data.file, data.filecontent, options),
    //     data.filecontent,
    //     data.file,
    //     data.file.indexOf('assets') !== 0,
    //   );
    // });

    return form;
  }

  // TODO indexFile
  private createFormElement(indexFile?: string): HTMLFormElement {
    const form = document.createElement('form');
    // form.action = `${STACKBLITZ_URL}?file=${indexFile}`;
    form.action = `${STACKBLITZ_URL}`;
    form.method = 'post';
    form.target = '_blank';
    return form;
  }

  /**
   * Appends a hidden input element to the form.
   * @param form Form to append the input to
   * @param name Name of the input
   * @param value Value of the input
   */
  private appendFormInput(form: HTMLFormElement, name: string, value: string): void {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  /**
   * Adds the file text to the form.
   * @param form the html form you are appending to
   * @param data example metadata about the example
   * @param content file contents
   * @param filename file name of the example
   * @param path path to the src
   * @param prependApp whether to prepend the 'app' prefix to the path
   */
  private addFileToForm(
    form: HTMLFormElement,
    content: string,
    filename: string,
    prependApp = true
  ): void {
    if (prependApp) {
      filename = 'app/' + filename;
    }

    if (filename !== 'angular.json') {
      filename = 'src/' + filename;
    }

    this.appendFormInput(form, `files[${filename}]`, this.appendCopyright(filename, content));
  }

  private appendCopyright(filename: string, content: string): string {
    if (filename.indexOf('.ts') > -1 || filename.indexOf('.scss') > -1) {
      content = `${content}\n\n/**  ${COPYRIGHT} */`;
    } else if (filename.indexOf('.html') > -1) {
      content = `${content}\n\n<!-- ${COPYRIGHT} -->`;
    }
    return content;
  }
}
