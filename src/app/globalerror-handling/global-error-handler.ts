import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { GlobalErrorLogService } from './global-errorlog.service';


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorPopupService: GlobalErrorLogService,
    private zone: NgZone
  ) { }

  handleError(error: any) {
    if (error != undefined) {
      if (!(error instanceof HttpErrorResponse)) {
        this.zone.run(() =>
       
          this.errorPopupService.showPopup(
            error?.message,
            error?.response,
            error?.status
          )
        );
      }
    }

  }
}
