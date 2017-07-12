import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Phone } from '../phone';
import {PhoneService} from "../phone.service";

@Component({
  selector: 'app-modal-content',
  templateUrl: './app.modal.content.html'
})
export class ModalContent {
  @Input() phone: Phone;

  constructor(
    public activeModal: NgbActiveModal,
    private phoneService: PhoneService) {}

  close(phone) {
    this.phoneService.buy_phone(phone);
    this.activeModal.close();
  }
}
