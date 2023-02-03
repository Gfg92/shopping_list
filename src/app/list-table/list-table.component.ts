import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Article } from '../classes/Article';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent {

  columns: string[] = ['description', 'delete'];
  articleList: Article[] = [];
  @ViewChild(MatTable) table!: MatTable<String>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getArticles();
    
  }


  getArticles(){
    return this.dataService.loadArticleList().subscribe(myArticles => {
      console.log(myArticles);
      this.articleList = Object.values(myArticles);
    });
  }

  




}
