import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from '../baseUrl';
import { Image } from '../models/ImageModel';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  apiUrl=BaseUrl.ApiUrl;

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get<Image>(`${this.apiUrl}photos/random`,{
      headers: {
        Authorization:'Client-ID Wi6rH-5MQKNC9zwqQjhdTCR_FzXSDA_8RUMjbypmhTs' 
      }
    })
  }
}
