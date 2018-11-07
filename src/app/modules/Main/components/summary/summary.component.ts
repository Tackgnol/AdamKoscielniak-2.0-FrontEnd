import { Component, OnInit, ViewChild } from '@angular/core';
import ISummaryItem from 'src/models/interface/ISummaryItem';
import { SummaryService } from 'src/services/summary-service.service';
import { ToastrService } from 'ngx-toastr';
import { FilterService } from 'src/services/filter.service';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private sumService: SummaryService, private toastr: ToastrService, private filters: FilterService) {
    this.filters.skillFilters.subscribe(
      r => {
        this.skills = r;
        this.loadData();
      }
    );
  }

  loading: boolean;
  skills = Array<string>();
  summaryItems = Array<ISummaryItem>();

  @ViewChild('items', { read: DragScrollComponent }) ds: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  loadData = () => {
    this.loading = true;
    const experienceRequest = this.sumService.getCounts({ skills: this.skills });
    experienceRequest.subscribe(
      data => {
        this.summaryItems = data.Value;
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
