import {
  Component,
  OnInit
} from '@angular/core';
import { ShortUrlService } from '../../services/short-url.service';
import { TinyURL } from '../../models/url';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenURLComponent implements OnInit {

  public url = '';
  public newURL: string;
  public hashasLink = false;
  public loading = false;
  private error: string;

  constructor(
    private shortenURL: ShortUrlService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit() {}

  ShortenURL() {
    // The url variabled is binded to the input field.
    // when the button is clicked, check to see if it is a reasonable size,
    // then encode it and send it to the server so it can be added to the database

    if (this.url.length > 2200) {
      this.toastr.error('Opps!', 'URL is to Long');
    } else if (this.url.length <= 0) {
      this.toastr.error('Opps!', 'URL fields is empty');
    } else {
      this.loading = true;
      // removing the https so it can be manually added later,
      // and then encode it so it can't pass unwanted characters to the server
      this.url = this.url.replace(/^https?:\/\//, '');
      const encodedUrl = encodeURIComponent(this.url);
      this.shortenURL.convertToShortUrl(encodedUrl).subscribe(
        res => {
          this.newURL = res.tinyUrl;
          this.hashasLink = true;
          this.loading = false;
        },
        error => {
          this.toastr.error('Opps!', 'Failed Shrinking URL');
          this.loading = false;
        }
      );
    }

  }

  followLink() {
    this.router.navigate(['/' + this.newURL]);
  }

}
