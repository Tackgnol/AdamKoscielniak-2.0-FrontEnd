import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  constructor(private bsModalRef: BsModalRef) {}

  @Input()
  dangerousFunction: Function;
  @Input()
  message: string;

  confirm = () => {
    this.dangerousFunction();
    this.bsModalRef.hide();
  };

  decline = () => {
    this.bsModalRef.hide();
  };

  ngOnInit(): void {}
}
