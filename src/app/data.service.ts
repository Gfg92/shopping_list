import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './classes/Article';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private httpClient: HttpClient) { }


  saveArticles(articles: Article[]) {
    this.httpClient.put('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList.json', articles).subscribe(
      response => console.log("Se han guardado los artículos" + response),
      error => console.log("Error: " + error),
    );
    this.httpClient.put('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList.json', articles).subscribe(
      response => console.log("Se han guardado los artículos" + response),
      error => console.log("Error: " + error),
    );
  }
  deleteArticle(id: number) {
    let url = 'https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList/' + id + '.json';
    this.httpClient.delete(url).subscribe(
      response => console.log("Se ha eliminado el artículo: " + response),
      error => console.log("Error " + error),
    );

    let url1 = 'https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList/' + id + '.json';
    this.httpClient.delete(url1).subscribe(
      response => console.log("Se ha eliminado el artículo: " + response),
      error => console.log("Error " + error),
    );

  }

  dropArticles() {
    this.httpClient.delete('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList.json').subscribe()
    this.httpClient.delete('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList.json').subscribe()
  }

  loadEditArticleList() {
    return this.httpClient.get('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/editArticleList.json')
  }

  loadArticleList() {
    return this.httpClient.get('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/articleList.json')
  }

}
