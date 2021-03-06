import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { Phone } from '../phone';
import {ModalContentComponent} from './app.modal.content';

@Component({
  selector: 'app-modal-component',
  templateUrl: './app.modal.component.html'
})
export class ModalComponent {
  @Input() phone: Phone;
  constructor( private modalService: NgbModal ) {}

  open(phone) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.phone = phone;
  }
}
