import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}
  fetchImage() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID kxHGk1lTOPDESAJ9JKNCQ77pQLLAbolH_RIQVCTdG6E',
      },
    });
  }
}
