import SkillGroup from 'src/models/SkillGroup';

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SkillService } from 'src/services/skill-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(
    private sklService: SkillService,
    private toastr: ToastrService
  ) {

  }
  loading = false;
  skills = Array<SkillGroup>();


  loadData = () => {
    this.loading = true;
    const skillRequest = this.sklService.getSkillGroups({});
    skillRequest.subscribe(
      data => {
        this.skills = data.Value;
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
