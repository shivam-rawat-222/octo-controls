import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
 
@Injectable({
  providedIn: 'root'
})
export class SwalMessageService {
 
  constructor() { }
 
  showConfirmation(
    confirmTitle: string = 'AreYouSure',
    confirmText: string = 'You Want To Delete This Record?',
    confirmButtonText: string = 'Yes',
    cancelButtonText: string = 'No',
    confirmButtonColor: string = '#0052cc',
    cancelButtonColor: string = '#0052cc'
  ) {
    return Swal.fire({
      icon: 'warning',
      title: confirmTitle,
      text: confirmText,
      confirmButtonColor: confirmButtonColor,
      cancelButtonColor: cancelButtonColor,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }

 
  showSuccess(message: string) {
    return Swal.fire({
      icon: 'success',
      text: message,
       confirmButtonText: 'Ok'
    });
  }
 
  showError(message: string) {
    return Swal.fire({
      icon: 'error',
      text: message,
      confirmButtonText: 'Ok'
    });
  }
 
  showWarning(message: string) {
    return Swal.fire({
      icon: 'warning',
      text: message,
        confirmButtonText: 'Ok'
    });
  }
}
