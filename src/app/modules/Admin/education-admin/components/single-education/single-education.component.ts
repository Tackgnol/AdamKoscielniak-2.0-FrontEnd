import { EducationService } from 'src/services/education-service.service';
import { Education } from 'src/models/Education';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ConfirmationModalComponent } from 'src/utils/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-admin-single-education',
  templateUrl: './single-education.component.html',
  styleUrls: ['./single-education.component.css']
})
export class SingleEducationAdminComponent implements OnInit {

  @Input()
  education: Education;
  modalRef: BsModalRef;

  show = false;

  removed = false;

  toggle = () => {
    this.show = !this.show;
  }

  constructor(
    private eduService: EducationService,
    private modalService: BsModalService
  ) { }


  delete = () => {
    this.eduService.deleteEducation(this.education.Id).subscribe(() => {
      this.removed = true;
    });
  }

  openModalWithComponent() {
    const initialState = {
      dangerousFunction: () => this.delete(),
      message: `Remove experience id: ${this.education.School} - ${this.education.Course} (${this.education.Level})`
    };
    this.modalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState
    });
  }

  ngOnInit() {
  }

}
