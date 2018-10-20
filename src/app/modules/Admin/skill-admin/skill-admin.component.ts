import { SkillService } from 'src/services/skill-service.service';
import { Component, OnInit, Input } from '@angular/core';
import SkillGroup from 'src/models/SkillGroup';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-skill-admin',
  templateUrl: './skill-admin.component.html',
  styleUrls: ['./skill-admin.component.css']
})
export class SkillAdminComponent implements OnInit {

  loading = false;

  constructor(private sklService: SkillService, private toastr: ToastrService) { }

  skillGroups: Array<SkillGroup>;

  loadData = () => {
    this.loading = true;
    const skillRequest = this.sklService.getSkillGroups({});
    skillRequest.subscribe(
      data => {
        this.skillGroups = data.Value;
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
