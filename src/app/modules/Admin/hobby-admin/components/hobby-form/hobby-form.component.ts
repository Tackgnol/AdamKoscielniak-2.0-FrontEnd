import IHobby from 'src/models/interface/IHobby';
import Hobby from 'src/models/Hobby';
import { Component, OnInit, Input } from '@angular/core';
import { HobbyService } from 'src/services/hobby-service.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorsToList } from 'src/utils/ErrorsToList';

@Component({
  selector: 'app-hobby-form',
  templateUrl: './hobby-form.component.html',
  styleUrls: ['./hobby-form.component.css']
})
export class HobbyFormComponent implements OnInit {

  @Input()
  newHobby: boolean;

  @Input()
  hobby?: Hobby;

  model: Hobby;

  constructor(private hobbySrv: HobbyService, private toastr: ToastrService) { }

  onSubmit = () => {

    const currentState = this.model;
    const toSend: IHobby = {
      Id: currentState.Id,
      Name: currentState.Name,
      FAIcon: currentState.FAIcon,
      Description: currentState.Description,
      Photos: []
    };

    if (this.newHobby) {
      this.hobbySrv.newHobby(toSend).subscribe(
        () => this.toastr.info('Changes saved succefully'),
        e => this.toastr.error(e)
      );
    } else {
      this.hobbySrv.updateHobby(currentState.Id, toSend).subscribe(
        () => this.toastr.info('Changes saved succefully'),
        e => {
          const errors = ErrorsToList(e);
          this.toastr.error(errors, null, {
            enableHtml: true,
            positionClass: 'toast-top-full-width',
            progressBar: true,
            closeButton: true
          });
        },
      );
    }
  }

  trackByFn(index, item) {
    return index;
  }



  ngOnInit() {
    if (this.newHobby) {
      const edu = new Hobby();
      this.model = edu;
    } else {
      this.model = this.hobby;
    }
  }

}
