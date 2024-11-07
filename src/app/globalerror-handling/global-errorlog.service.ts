import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SwalMessageService } from '../services/swalmessageservice.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorLogService {

  constructor(private swalMessageService: SwalMessageService) {

  }
  showPopup(message: string, response: string, status?: number) {
    let errorMessage = message;
    this.swalMessageService.showError(errorMessage);
  }

}
