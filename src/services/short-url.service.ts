import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TinyURL } from 'src/models/url';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  public apiRoot = 'https://createminiurl.azurewebsites.net/';
  public urlObj: TinyURL = new TinyURL('', '');
  constructor(private http: HttpClient) {
  }

  convertToShortUrl(longUrl: string): Observable<TinyURL> {
    this.urlObj.fullUrl = longUrl;
    this.urlObj.tinyUrl = '';
    return this.http.post<TinyURL>(this.apiRoot + '/long', this.urlObj);
  }
  getFullUrl(shortUrl: string): Observable<TinyURL> {
    this.urlObj.fullUrl = '';
    this.urlObj.tinyUrl = shortUrl;
    return this.http.post<TinyURL>(this.apiRoot + '/short', this.urlObj);
  }
}
