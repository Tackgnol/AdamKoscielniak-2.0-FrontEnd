import { SocialService } from 'src/services/social.service';
import { Component, OnInit } from '@angular/core';
import Social from 'src/models/Social';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private socialService: SocialService, private toastr: ToastrService) { }

  loading: boolean;
  socialUrls: Array<Social>;

  ngOnInit() {
    this.loading = true;
    this.socialService.getSocials().subscribe(
      data => {
        this.socialUrls = data.Value;
        this.loading = false;
      },
      e => {
        this.toastr.error(e, null, {
          enableHtml: true,
          positionClass: 'toast-top-full-width',
          progressBar: true,
          closeButton: true
        });
      }
    );
  }

}
