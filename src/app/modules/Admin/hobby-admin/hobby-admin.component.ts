import Hobby from 'src/models/Hobby';
import { Component, OnInit } from '@angular/core';
import { HobbyService } from 'src/services/hobby-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hobby-admin',
  templateUrl: './hobby-admin.component.html',
  styleUrls: ['./hobby-admin.component.css']
})
export class HobbyAdminComponent implements OnInit {

  loading = false;

  constructor(private hobbyService: HobbyService, private toastr: ToastrService) { }

  hobbies: Array<Hobby>;

  loadData = () => {
    this.loading = true;
    const skillRequest = this.hobbyService.getHobbies({});
    skillRequest.subscribe(
      data => {
        this.hobbies = data.Value;
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

  ngOnInit() {
    this.loadData();
  }

}
