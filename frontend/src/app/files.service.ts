import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) { }

  getProse() {
    return this.httpClient.get('/api/prose');
  }

  getPoetry() {
    return this.httpClient.get('/api/poetry');
  }



}
