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
    this.filters.dateRange.subscribe(
      r => {
        this.dateRange = r;
        this.loadData();
      }
    );
  }

  dateRange = ['2001-01-01', '2020-01-01'];

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
    const experienceRequest = this.sumService.getCounts({from: this.dateRange[0], to: this.dateRange[1], skills: this.skills });
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
