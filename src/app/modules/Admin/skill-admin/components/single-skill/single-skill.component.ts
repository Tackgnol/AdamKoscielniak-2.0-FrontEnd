import { Component, OnInit, Input } from '@angular/core';


import SkillGroup from 'src/models/SkillGroup';
import { SkillService } from 'src/services/skill-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ConfirmationModalComponent } from 'src/utils/components/confirmation-modal/confirmation-modal.component';
import { expandH } from 'src/utils/Animations';



@Component({
  selector: 'app-admin-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.css'],
  animations: [expandH]
})
export class SingleSkillAdminComponent implements OnInit {
  constructor(private sklService: SkillService, private modalService: BsModalService) { }

  @Input()
  skill: SkillGroup;
  modalRef: BsModalRef;
  show = false;
  removed = false;

  toggle = () => {
    this.show = !this.show;
  }

  delete = () => {
    this.sklService.deleteSkillGroup(this.skill.Id).subscribe(() => {
      this.removed = true;
    });
  }

  openModalWithComponent() {
    const initialState = {
      dangerousFunction: this.delete,
      message: `Remove skill id: ${this.skill.Id} - ${
        this.skill.Name
        }`
    };
    this.modalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState
    });
  }

  ngOnInit() { }

}
