import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './classes/Article';
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private httpClient:HttpClient) { }

  saveArticles(articles:Article[]){
    this.httpClient.put('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/article.json', articles).subscribe(
      response => console.log("Se han guardado los artículos" + response),
      error => console.log("Error: " + error),
    );
  }
  dropArticles(){
    this.httpClient.delete('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/article.json').subscribe()
  }

  loadArticles(){
    return this.httpClient.get('https://db-article-default-rtdb.europe-west1.firebasedatabase.app/article.json')
  }




}
