import { Component, OnInit } from '@angular/core';

import { FilesService } from '../files.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.scss']
})
export class WritingComponent implements OnInit {

  articles: JSON;
  poems: JSON;

  constructor(private filesService: FilesService) { }

  ngOnInit() {
    this.filesService.getProse().subscribe(data => {
      this.articles = data as JSON;
    });

    this.filesService.getPoetry().subscribe(data => {
      this.poems = data as JSON;
    });
  }

}
