import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }
  API_URL = 'https://nature-image-api.now.sh/search?q=';
  search(searchTerm) {
    const url = `${this.API_URL}${searchTerm}}`;
    return this.http.get(url);
  }
}
