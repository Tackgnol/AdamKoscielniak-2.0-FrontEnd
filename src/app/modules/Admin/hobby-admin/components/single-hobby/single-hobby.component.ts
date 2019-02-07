import { Component, OnInit, Input } from '@angular/core';
import { expandH } from 'src/utils/Animations';
import Hobby from 'src/models/Hobby';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { HobbyService } from 'src/services/hobby-service.service';
import { ConfirmationModalComponent } from 'src/utils/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-single-hobby',
  templateUrl: './single-hobby.component.html',
  styleUrls: ['./single-hobby.component.css'],
  animations: [expandH]
})
export class SingleHobbyComponent implements OnInit {
  @Input()
  hobby: Hobby;
  modalRef: BsModalRef;
  show = false;
  removed = false;

  constructor(private hobbySrv: HobbyService, private modalService: BsModalService) { }

  toggle = () => {
    this.show = !this.show;
  }

  delete = () => {
    this.hobbySrv.deleteHobby(this.hobby.Id).subscribe(() => {
      this.removed = true;
    });
  }

  openModalWithComponent() {
    const initialState = {
      dangerousFunction: this.delete,
      message: `Remove hobby id: ${this.hobby.Id} - ${
        this.hobby.Name
        }`
    };
    this.modalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState
    });
  }

  ngOnInit() { }


}
