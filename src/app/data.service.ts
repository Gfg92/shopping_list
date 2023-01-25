import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './classes/Article';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private httpClient: HttpClient) { }


  saveArticles(articles: Article[]) {
    this.httpClient.put('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/article.json', articles).subscribe(
      response => console.log("Se han guardado los artículos" + response),
      error => console.log("Error: " + error),
    );
  }
  deleteArticle(id: number) {
    let url = 'https://db-article-default-rtdb.europe-west1.firebasedatabase.app/article/' + id + '.json';
    this.httpClient.delete(url).subscribe(
      response => console.log("Se ha eliminado el artículo: " + response),
      error => console.log("Error " + error),
    );

  }

  dropArticles() {
    this.httpClient.delete('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/article.json').subscribe()
  }

  loadArticles() {
    return this.httpClient.get('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/article.json')
  }





}
