import { Component, OnInit } from '@angular/core';
import { HobbyService } from 'src/services/hobby-service.service';
import { ToastrService } from 'ngx-toastr';
import Hobby from 'src/models/Hobby';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  loading = false;
  hobbies: Array<Hobby>;

  constructor(private hobbyService: HobbyService, private toastr: ToastrService) { }

  loadData = () => {
    this.loading = true;
    const hobbyRequest = this.hobbyService.getHobbies({});
    hobbyRequest.subscribe(
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
