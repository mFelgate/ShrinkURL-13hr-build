import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shortenedUrl, TinyURL } from 'src/models/url';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
// import { environment } from '../environments';
@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  public urlObj: TinyURL = new TinyURL('', '');
  constructor(private http: HttpClient) {
  }

  convertToShortUrlRails(longUrl: string): Observable<shortenedUrl> {
    return this.http.post<shortenedUrl>(environment.railsApiRoot + '/urls.json', {"longUrl": longUrl});
  }
  getFullUrlRails(shortUrl: string): Observable<shortenedUrl> {
    return this.http.post<shortenedUrl>(environment.railsApiRoot +'/urls/shortUrl.json', {"shortUrl": shortUrl});
  }
}
