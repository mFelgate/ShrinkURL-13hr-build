import {
  Component,
  OnInit
} from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';
import { TinyURL } from '../../models/url';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenURLComponent implements OnInit {

  private url = '';
  private newURL: string;
  private hashasLink = false;
  constructor(
    private shortenURL: ShortUrlService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {}

  ShortenURL() {
    // tslint:disable-next-line:whitespace
    this.url = this.url.replace(/^https?:\/\//,'');
    this.url = encodeURIComponent(this.url);
    this.shortenURL.convertToShortUrl(this.url).subscribe(
      res => {
        this.newURL = res.tinyUrl;
        this.hashasLink = true;
      }
    );
  }

  followLink() {
    this.router.navigate(['/' + this.newURL]);
  }

}
