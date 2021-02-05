import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  constructor(bsModalRef: BsModalRef) {
    this.modalRef = bsModalRef;
  }

  @Input()
  dangerousFunction: Function;
  @Input()
  message: string;
  modalRef: BsModalRef;

  confirm = () => {
    this.dangerousFunction();
    this.modalRef.hide();
  }

  decline = () => {
    this.modalRef.hide();
  }

  ngOnInit(): void { }
}
