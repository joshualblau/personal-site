import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) { }

  getProse() {
    return this.httpClient.get('http://localhost:5000/api/prose');

    /**return [{'title':'Title1',
        'body':['this is a paragraph','this is another paragraph']},
        {'title':'Title2',
        'body':['paragraph','paragraph2']}];**/
  }

  getPoetry() {
    return this.httpClient.get('http://localhost:5000/api/poetry');

    /**return [{'title':'Title1',
        'body':[['stanza1_line1','stanza1_line2'],['stanza2_line1','stanza2_line2']]},
        {'title':'Title2',
        'body':[['stanza1 line1','stanza1 line2'],['stanza2 line1','stanza2 line2']]}];**/
  }



}
