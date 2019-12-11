import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShortUrlService } from '../../services/short-url.service';
import { TinyURL } from '../../models/url';

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
    private shortUrlService: ShortUrlService
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.shortUrlService.getFullUrl(id)
.subscribe(
      res => {
        window.location.href = 'https://' + decodeURIComponent(res.fullUrl);
      }
    );
  }

}
