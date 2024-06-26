import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Article } from '../classes/Article';
import { DataService } from '../data.service';


@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {

  columns: string[] = ['description', 'delete'];
  articleList: Article[] = [];
  description!: string;
  @ViewChild(MatTable) table!: MatTable<String>;

  constructor(private dataService: DataService){}
  
  ngOnInit():void{
    this.getArticles().subscribe(myArticles => {
      console.log(myArticles);
      this.articleList = Object.values(myArticles);
    });
  }

  removeArticle(cod: number) {
    this.articleList.splice(cod, 1);
    this.table.renderRows();
    this.dataService.deleteArticle(cod);
    this.dataService.saveArticles(this.articleList);
  }
  removeAll() {
    if (confirm("¿Estás segur@ de que quieres borrar todo?")) {
      this.articleList.splice(0, this.articleList.length);
      this.table.renderRows();
      this.dataService.dropArticles();
    }
  }
  addArticle() {
    let art = new Article(this.description);
    this.articleList.push(art);
    this.table.renderRows();
    this.dataService.saveArticles(this.articleList);
    this.description = '';
  }
  getArticles(){
    return this.dataService.loadEditArticleList()
  }

}

