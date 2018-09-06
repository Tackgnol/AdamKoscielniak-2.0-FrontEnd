import { ConfirmationModalComponent } from './../../../../../../utils/components/confirmation-modal/confirmation-modal.component';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Experience } from 'src/models/Experience';
import { ExperienceService } from 'src/services/experience-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  styleUrls: ['./single-experience.component.css']
})
export class SingleExperienceComponent implements OnInit {
  @Input()
  experience: Experience;
  modalRef: BsModalRef;

  removed = false;

  show = false;

  toggle = () => {
    this.show = !this.show;
  };

  constructor(
    private expService: ExperienceService,
    private modalService: BsModalService
  ) {}

  delete = () => {
    this.expService.deleteExperience(this.experience.Id).subscribe(() => {
      this.removed = true;
    });
  };

  openModalWithComponent() {
    const initialState = {
      dangerousFunction: this.delete,
      message: `Remove experience id: ${this.experience.Id} - ${
        this.experience.Employer
      }-${this.experience.Position}`
    };
    this.modalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState
    });
  }

  ngOnInit() {}
}
