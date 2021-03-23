import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShortUrlService } from '../../services/short-url.service';
import { TinyURL,shortenedUrl  } from '../../models/url';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reroute',
  templateUrl: './reroute.component.html',
  styleUrls: ['./reroute.component.scss']
})
export class RerouteComponent implements OnInit {

  private shortURL: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shortUrlService: ShortUrlService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Get id from route, check to see if it matches what the server expects,
    // then use it to get the full url
    const id = this.route.snapshot.paramMap.get('id');
    const safeRedirect = new RegExp('^[a-z0-9]*$');
    if (id.match(safeRedirect)) {

      if (sessionStorage.getItem("API") == ".NET") {
        this.shortUrlService.getFullUrl(id).subscribe(
          res => {
            window.location.href = 'https://' + decodeURIComponent(res.fullUrl);
          },
          error => {
            this.toastr.error('Opps!', 'Could not find URL');
          }
        );
      }
      else {
        this.shortUrlService.getFullUrlRails(id).subscribe(
          res => {
            window.location.href = 'https://' + decodeURIComponent(decodeURIComponent(res.longUrl));
          },
          error => {
            this.toastr.error('Opps!', 'Could not find URL');
          }
        );
      }

    } else {
      this.toastr.error('Opps!', 'The short URL does not look right');
    }
  }
}
