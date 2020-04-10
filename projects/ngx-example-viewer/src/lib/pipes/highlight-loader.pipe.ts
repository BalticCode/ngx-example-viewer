import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as hljs from 'highlight.js';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'highlightLoader'
})
export class HighlightLoaderPipe implements PipeTransform {

  constructor(
    private readonly http: HttpClient
  ) { }

  public transform(filePath: string, language: string): Observable<string> {
    return this.http.get(filePath, {
      responseType: 'text'
    })
      .pipe(
        map((resp: any) => hljs.highlight(language, resp)),
        map((html: any) => html.value),
      );
  }
}
